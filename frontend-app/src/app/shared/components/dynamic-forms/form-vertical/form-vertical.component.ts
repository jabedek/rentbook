import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';
import moment from 'moment';

import { ITableColumn } from './../../../../shared/interfaces/table';
import { FormLabels } from './../../../../shared/types/form-labels';
import { IValidatorTemplate } from './../../../../shared/interfaces/table';
import { BackendData } from './../../../../shared/types/backend-data';

@Component({
  selector: 'app-form-vertical',
  templateUrl: './form-vertical.component.html',
  styleUrls: ['./form-vertical.component.scss'],
})
export class FormVerticalComponent implements OnInit {
  @Input() columns: ITableColumn[];
  @Input() mode: string;
  @Input() appearance: string = 'standard';
  @Input() displayDirection: string = 'row';
  @Input() inputData: null | BackendData;
  @Input() labels: FormLabels = { submit: 'Submit', reset: 'Erase' };
  @Output('submitItem') submitItem = new EventEmitter<BackendData>();
  @Output('unpickItem') unpickItem = new EventEmitter();

  form: FormGroup;
  formSub: Subscription;

  constructor(private fb: FormBuilder) {}

  setupForm(): void {
    let group = {};

    this.columns.forEach((col) => {
      if (col.name === 'id') {
        group[col.name] = new FormControl(UUID.UUID(), this.setValidators(col));
      } else {
        group[col.name] = new FormControl('', this.setValidators(col));
      }
    });

    this.form = this.fb.group(group);
  }

  setValidators(column: ITableColumn): Validators {
    let validators = [];

    column.validators.forEach((validator: IValidatorTemplate) => {
      if (validator.value) {
        if (validator.label === 'required' || validator.label === 'email') {
          let valid = Validators[validator.label];
          validators.push(valid);
        }

        if (
          validator.label === 'pattern' ||
          validator.label === 'minLength' ||
          validator.label === 'min' ||
          validator.label === 'maxLength' ||
          validator.label === 'max'
        ) {
          let valid = Validators[validator.label](validator.parameters[0]);
          validators.push(valid);
        }
      }
    });

    return validators;
  }

  resetForm(): void {
    this.form.reset();
    this.setupForm();

    if (this.mode === 'edit') {
      this.unpickItem.emit();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.columns.forEach((col) => {
        if (col.inputType === 'date') {
          let date = this.form.get(col.name).value;
          let dateMoment = moment(date).format('YYYY-MM-DD');
          this.form.patchValue({ [col.name]: dateMoment });
        }
      });

      this.submitItem.emit(this.form.value);
    }
  }

  private setFormValue() {
    if (this.inputData && this.form) {
      this.form.setValue(this.inputData);
    }
  }

  ngOnInit(): void {
    this.setupForm();
    this.formSub = this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe(() => {});

    this.setFormValue();
  }

  ngOnChanges(): void {
    this.setFormValue();
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }
}
