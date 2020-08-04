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
import { ITableColumn } from 'src/app/interfaces';
import { filter } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() columns: ITableColumn[];
  @Input('item') inputData: null | BackendData;
  @Output('createItem') createItem = new EventEmitter<BackendData>();
  @Output('unpickItem') unpickItem = new EventEmitter();
  @Output('updateItem') updateItem = new EventEmitter<BackendData>();

  form: FormGroup;
  formSub: Subscription;

  constructor(private fb: FormBuilder) {}

  setupForm() {
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

  setValidators(column) {
    const validators = [];

    column.validators.forEach((validator) => {
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

  resetForm() {
    this.unpickItem.emit();
    this.form.reset();
    this.setupForm();
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.inputData) {
        this.updateItem.emit(this.form.value);
      } else {
        this.createItem.emit(this.form.value);
      }
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
      .subscribe((data) => {
        // console.log('Data', JSON.stringify(data));
        // console.log('changes in dynamic-form');
      });
  }

  ngOnChanges(): void {
    if (this.inputData) {
      this.form.setValue(this.inputData);
    }
  }

  ngOnDestroy(): void {
    console.log('Destroy');

    this.formSub.unsubscribe();
  }
}