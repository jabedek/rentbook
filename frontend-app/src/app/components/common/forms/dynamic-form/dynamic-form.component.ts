import { BackendData } from './../../../../types/BackendData';
import { IValidator } from './../../../../interfaces/table';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IUser, IBook, ITableColumn } from 'src/app/interfaces';
import { filter } from 'rxjs/operators';

// type BackendData = IUser | IBook;

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() columns: ITableColumn[];
  @Input() item: null | BackendData;

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  setupForm() {
    let group = {};

    this.columns.forEach((col) => {
      group[col.name] = new FormControl('', this.setValidators(col));
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

    console.log(column.name);

    return validators;
  }

  onSubmit(stuff) {}

  onChange(event) {
    console.log('change');
  }

  ngOnInit(): void {
    this.setupForm();
    this.form.valueChanges
      .pipe(filter((data) => this.form.valid))
      .subscribe((data) => console.log('Data', JSON.stringify(data)));
  }

  ngOnChanges(changes): void {
    console.log('changes', changes);

    if (this.item) {
      this.form.setValue(this.item);
    }
  }
}
