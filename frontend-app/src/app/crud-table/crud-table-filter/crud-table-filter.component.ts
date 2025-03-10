import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
import { Subscription } from 'rxjs';
import { BackendData } from './../../shared/types/backend-data';
import { ITableColumn } from './../../shared/interfaces/table';

import moment from 'moment';
type buttonLabels = {
  submit: string;
  reset: string;
};

@Component({
  selector: 'app-crud-table-filter',
  templateUrl: './crud-table-filter.component.html',
  styleUrls: ['./crud-table-filter.component.scss'],
})
export class CrudTableFilterComponent implements OnInit, OnChanges, OnDestroy {
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
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.columns.forEach((col) => {
        if (col.inputType === 'date') {
          if (this.form.controls[col.name].value) {
            let date = this.form.get(col.name).value;

            let localeData = moment.localeData();

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
