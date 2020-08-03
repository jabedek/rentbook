import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { IUser, IBook, ITableColumn } from 'src/app/interfaces';
import { filter } from 'rxjs/operators';

type BackendData = IUser | IBook;

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() columns: ITableColumn[];
  @Input() item: null | BackendData;

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  setupForm() {
    // console.log(this.columns);
    // console.log(this.item);

    let group = {};

    this.columns.forEach((col) => {
      group[col.name] = new FormControl('', Validators.required);
    });

    // console.log(group);
    this.form = this.fb.group(group);
    console.log(this.form);
  }

  onSubmit(stuff) {}

  onChange(event) {}

  ngOnInit(): void {
    this.setupForm();
    this.form.valueChanges.subscribe((data) =>
      console.log('Data', JSON.stringify(data))
    );
  }
}
