import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { IUser, IBook } from 'src/app/interfaces';

type BackendTypes = IUser | IBook;

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() templateItem: null | BackendTypes;

  templateData = [];
  controlsNames;
  options;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  setupForm() {
    let itemKeys = Object.keys(this.templateItem);

    itemKeys.forEach((key) => {
      let template = {
        label: key,
        value: [this.templateItem[key]],
        type: this.determineInputType(key, this.templateItem[key]),
        order: 0,
      };

      if (template.type === 'object') {
        template.value = [{}];
        Object.keys(template.value);
      }

      this.templateData.push(template);
      console.log(this.templateData);
    });
  }

  onSubmit() {}

  isTemplateAnObject(control) {
    const result = typeof this.form.controls[control].value === 'object';

    return result;
  }

  determineInputType(label: string, value) {
    let resultType: string = '';

    if (typeof value === 'string') {
      resultType = label === 'email' ? 'email' : 'text';
    }

    if (typeof value === 'number') {
      resultType = 'number';
    }

    if (typeof value === 'boolean') {
      resultType = 'radio';
    }

    if (typeof value === 'object') {
      resultType = 'select';
    }

    return resultType;
  }

  ngOnInit(): void {
    console.log(this.templateItem);
    this.setupForm();
  }
}
