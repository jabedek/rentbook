import { UUID } from 'angular2-uuid';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
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
export class DynamicForm3Component implements OnInit, OnChanges {
  @Input('formConfig') config: any;
  @Input() currentlyEdited: any;
  @Output() createItem = new EventEmitter();
  formGroup: FormGroup;

  inputConfigs: any = [];
  constructor(private formBuilder: FormBuilder) {}

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

  radioClick(event) {
    console.log(event);
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

    const itemData = configureNewItem(formGroup);

    console.log('itemData', itemData);

    this.createItem.emit(itemData);
  }

  ngOnInit() {
    this.createFormTemplate();
    console.log('init', this.currentlyEdited);
  }

  ngOnChanges(changes) {
    console.log('changes', this.currentlyEdited);
  }
}
