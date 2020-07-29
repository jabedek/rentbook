import { Component } from '@angular/core';

import { QuestionService } from '../../../services/question.service';
import { QuestionBase } from '../../../models/dynamic-questions/QuestionBase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [QuestionService],
})
export class HomeComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
