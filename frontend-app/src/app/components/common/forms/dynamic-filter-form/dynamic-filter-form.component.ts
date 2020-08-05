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
