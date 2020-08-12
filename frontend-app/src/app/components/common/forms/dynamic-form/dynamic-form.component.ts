import { IValidatorTemplate } from './../../../../interfaces/table';
import { BackendData } from './../../../../types/BackendData';
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
import { ITableColumn } from 'src/app/interfaces/table';
import { filter } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';
import {
  MAT_NATIVE_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';

type buttonLabels = {
  submit: string;
  reset: string;
};

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() columns: ITableColumn[];
  @Input() mode: string;
  @Input() displayDirection: string = 'row';
  @Input() inputData: null | BackendData;
  @Input() labels: buttonLabels = { submit: 'Submit', reset: 'Erase' };
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
    this.unpickItem.emit();

    this.form.reset();
    this.setupForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitItem.emit(this.form.value);
    }
  }

  ngOnInit(): void {
    this.setupForm();
    this.formSub = this.form.valueChanges
      .pipe(
        filter(() => {
          return this.form.valid;
        })
      )
      .subscribe((data) => {});

    if (this.inputData && this.form) {
      this.form.setValue(this.inputData);
    }
  }

  ngOnChanges(): void {
    if (this.inputData && this.form) {
      console.log(this.inputData);

      this.form.setValue(this.inputData);
    }
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }
}
