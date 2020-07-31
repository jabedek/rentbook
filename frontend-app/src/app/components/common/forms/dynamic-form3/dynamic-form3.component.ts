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
  ControlContainer,
} from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';

import { configureNewItem } from '../../../../utils';
import { IUser, IBook } from 'src/app/interfaces';

@Component({
  selector: 'app-dynamic-form3',
  templateUrl: './dynamic-form3.component.html',
  styleUrls: ['./dynamic-form3.component.scss'],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }],
})
export class DynamicForm3Component implements OnInit, OnChanges {
  editable: null | IUser | IBook; // if null then it's Create mode
  @Input('formConfig') config: any;
  @Input() currentlyEdited: any;
  @Output() createItem = new EventEmitter();
  mainForm: FormGroup;
  testForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    roles: new FormGroup({
      role_USER: new FormControl(true),
      role_ADMIN: new FormControl(false),
    }),
  });

  inputConfigs: any = [];
  constructor(private formBuilder: FormBuilder) {}

  mapPropsToInputs(item) {
    let templateObject = item;
    let inputTemplates = [];

    // For each object's property create an object containing
    // data for creating form inputs

    for (let key in templateObject) {
      console.log('key', key);

      let template = {
        label: key,
        type: 'text',
        options: templateObject[key],
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

      if (
        typeof templateObject[key] === 'object' ||
        Array.isArray(templateObject[key])
      ) {
        console.log('{} || []');

        template.type = 'checkbox';
        template.options = templateObject[key];
        console.log(template.options);
      }

      inputTemplates.push(template);
    }

    return inputTemplates;
  }

  createFormTemplate(item) {
    let inputTemplates = this.mapPropsToInputs(item);

    let group = {};
    let optionsGroup = {};

    // Create FormControls and wrap them in main mainForm
    inputTemplates.forEach((inputTemplate) => {
      console.log(inputTemplate);

      // Check if object's property was a primitive type based on input type
      if (inputTemplate.type !== 'checkbox') {
        group[inputTemplate.label] = new FormControl('', Validators.required);
      } else {
        console.log('checkbox');

        // # Check if 'options' is an array
        if (Array.isArray(inputTemplate.options)) {
          console.log('array');

          inputTemplate.options.forEach(() => {
            optionsGroup[inputTemplate.label] = new FormControl(
              false,
              Validators.required
            );
          });
        }

        // # Check if 'options' is an object
        if (inputTemplate.options == 'object') {
          console.log('object');

          for (let key in inputTemplate.options) {
            optionsGroup[inputTemplate.label] = new FormControl(
              false,
              Validators.required
            );
          }
        }

        console.log('elo');
      }
    });
    this.inputConfigs = inputTemplates;
    this.mainForm = new FormGroup(group);
    // Add sub-group into the main-mainForm
    this.mainForm['options'] = optionsGroup;
  }

  onSubmit(mainForm) {
    console.log('submitting');

    const itemData = configureNewItem(mainForm);

    console.log('itemData', itemData);

    this.createItem.emit(itemData);
  }

  ngOnInit() {
    // this.initTestForm();

    const item = this.currentlyEdited || this.config.templateObject;

    this.createFormTemplate(item);
    this.mainForm.valueChanges.subscribe((data) => {
      console.log('data changed!!!', data);
    });
  }

  ngOnChanges(changes) {
    if (this.currentlyEdited) {
      console.log('changes', this.currentlyEdited);
      this.createFormTemplate(this.currentlyEdited);
      // console.log(this);
    }
  }
}
