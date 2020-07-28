import { Component } from '@angular/core';

import { QuestionService } from '../../../services/question.service';
import { QuestionBase } from '../../../models/dynamic-questions/QuestionBase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers: [QuestionService],
})
export class HomeComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
