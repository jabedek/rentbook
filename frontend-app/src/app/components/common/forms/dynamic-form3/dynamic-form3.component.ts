import { UUID } from 'angular2-uuid';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';

import { configureNewItem } from '../../../../utils';

@Component({
  selector: 'app-dynamic-form3',
  templateUrl: './dynamic-form3.component.html',
  styleUrls: ['./dynamic-form3.component.scss'],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }],
})
export class DynamicForm3Component implements OnInit {
  @Input('formConfig') config: any;
  @Output() createItem = new EventEmitter();
  formGroup: FormGroup;

  inputConfigs: any = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createFormTemplate();
  }

  mapPropsToInputs() {
    let templateObject = this.config.templateObject;
    let inputTemplates = [];

    // For each object's property create an object containing
    // data for creating form inputs

    for (let key in templateObject) {
      let template = {
        label: key,
        type: 'text',
        options: [],
        data: this.config.data,
      };

      if (typeof templateObject[key] === 'string') {
        template.type = 'text';
      }

      if (typeof templateObject[key] === 'boolean') {
        template.type = 'radio';
      }

      if (typeof templateObject[key] === 'number') {
        template.type = 'number';
      }

      if (Array.isArray(templateObject[key])) {
        template.type = 'checkbox';
        template.options = templateObject[key];
      }

      inputTemplates.push(template);
    }
    return inputTemplates;
  }

  createFormTemplate() {
    let inputTemplates = this.mapPropsToInputs();

    let group = {};
    let optionsGroup = {};

    // Create FormControls and wrap them in main FormGroup
    inputTemplates.forEach((input_template) => {
      // Check if object's property was a primitive type based on input type
      if (input_template.type !== 'checkbox') {
        group[input_template.label] = new FormControl('', Validators.required);
      } else {
        input_template.options.forEach(() => {
          optionsGroup[input_template.label] = new FormControl(
            false,
            Validators.required
          );
        });
      }
    });
    this.inputConfigs = inputTemplates;
    this.formGroup = new FormGroup(group);
    // Add sub-group into the main-FormGroup
    this.formGroup['options'] = optionsGroup;
  }

  onSubmit(formGroup) {
    console.log('submitting');

    const data = configureNewItem(formGroup);

    console.log('data', data);

    this.createItem.emit(data);
  }
}
