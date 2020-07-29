/*
The DynamicFormComponent component is the entry point and the main container for the form, which is represented using the <app-dynamic-form> in a template.
The DynamicFormComponent component presents a list of questions by binding each one to an <app-question> element that matches the DynamicFormQuestionComponent.
*/

import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../../../models/dynamic-questions/QuestionBase';
import { CrudService } from './../../../../services/crud.service';
import { QuestionControlService } from '../../../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService, CrudService],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  resultMessage: string = 'random';

  constructor(
    private service: CrudService,
    private qcs: QuestionControlService
  ) {}

  ngOnInit() {
    // console.log('dynamic form:', this.questions);

    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
