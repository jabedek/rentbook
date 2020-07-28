/*
  The dynamic form itself will be represented by another container component.
  Each question is represented in the form component's template by an <app-question> tag, which matches an instance of DynamicFormQuestionComponent.

  The DynamicFormQuestionComponent is responsible for rendering the details of an individual question based on values in the data-bound question object. 
  The form relies on a [formGroup] directive to connect the template HTML to the underlying control objects. 
  The DynamicFormQuestionComponent creates form groups and populates them with controls defined in the question model, specifying display and validation rules.
*/

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../../../models/dynamic-questions/QuestionBase';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
