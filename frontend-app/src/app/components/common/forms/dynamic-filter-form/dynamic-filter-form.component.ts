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

import moment from 'moment';
type buttonLabels = {
  submit: string;
  reset: string;
};

@Component({
  selector: 'app-dynamic-filter-form',
  templateUrl: './dynamic-filter-form.component.html',
  styleUrls: ['./dynamic-filter-form.component.scss'],
})
export class DynamicFilterFormComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input() columns: ITableColumn[];
  @Output('submitItem') submitItem = new EventEmitter<BackendData>();
  @Output('resetFilter') resetFilter = new EventEmitter();

  form: FormGroup;
  formSub: Subscription;

  constructor(private fb: FormBuilder) {}

  setupForm(): void {
    let group = {};

    this.columns.forEach((col) => {
      group[col.name] = new FormControl('');
    });

    this.form = this.fb.group(group);
  }

  resetForm(): void {
    this.resetFilter.emit();
    this.form.reset();
    // this.setupForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.columns.forEach((col) => {
        if (col.inputType === 'date') {
          if (this.form.controls[col.name].value) {
            let date = this.form.get(col.name).value;

            let localeData = moment.localeData();
            let format = localeData.longDateFormat('LL');

            let dateMoment = moment(date).format('YYYY-MM-DD');

            this.form.patchValue({ [col.name]: dateMoment });
          }
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
  }

  ngOnChanges(): void {}

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }
}
