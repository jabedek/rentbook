import { FormLabels } from './../../../../types/form';
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
  AfterViewInit,
} from '@angular/core';
import { ITableColumn } from 'src/app/interfaces/table';
import { filter } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';

import moment from 'moment';
import { Moment } from 'moment';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() columns: ITableColumn[];
  @Input() mode: string;
  @Input() appearance: string = 'standard';
  @Input() displayDirection: string = 'row';
  @Input() inputData: null | BackendData;
  @Input() labels: FormLabels = { submit: 'Submit', reset: 'Erase' };
  @Output('submitItem') submitItem = new EventEmitter<BackendData>();
  @Output('unpickItem') unpickItem = new EventEmitter();

  // dateTest = new FormControl(moment([2017, 0, 1]));
  form: FormGroup;
  formSub: Subscription;

  constructor(private fb: FormBuilder) {}

  setupForm(): void {
    let group = {};

    // console.log(new Date().toJSON());

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

    // this.unpickItem.emit();

    if (this.mode === 'edit') {
      this.unpickItem.emit();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.columns.forEach((col) => {
        if (col.inputType === 'date') {
          let date = this.form.get(col.name).value;

          let localeData = moment.localeData();
          let format = localeData.longDateFormat('LL');

          let dateMoment = moment(date).format('YYYY-MM-DD');

          this.form.patchValue({ [col.name]: dateMoment });
        }
      });

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

  ngAfterViewInit() {}

  ngOnChanges(): void {
    if (this.inputData && this.form) {
      this.form.setValue(this.inputData);
    }
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }
}
