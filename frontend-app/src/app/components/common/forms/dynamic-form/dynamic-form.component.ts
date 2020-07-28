/*
The DynamicFormComponent component is the entry point and the main container for the form, which is represented using the <app-dynamic-form> in a template.
The DynamicFormComponent component presents a list of questions by binding each one to an <app-question> element that matches the DynamicFormQuestionComponent.
*/

import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { QuestionBase } from '../../../../models/dynamic-questions/QuestionBase';
import { CrudService } from './../../../../services/crud.service';
import { QuestionControlService } from '../../../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService, CrudService, MatDialogRef],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  resultMessage: string = '';

  constructor(
    private service: CrudService,
    private qcs: QuestionControlService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // editUser(user) {
  //   this.service.update('http://localhost:3000/users', user.id, user).subscribe(
  //     (user) => {
  //       this.result = `User "${user.email}" was successfully updated.`;
  //     },
  //     (err) => (this.result = err)
  //   );
  // }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    // console.log('data', this.dialog);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
