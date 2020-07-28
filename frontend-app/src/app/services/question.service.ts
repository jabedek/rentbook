import { Injectable } from '@angular/core';

import { QuestionDropdown } from '../models/dynamic-questions/QuestionDropdown';
import { QuestionBase } from '../models/dynamic-questions/QuestionBase';
import { QuestionTextbox } from '../models/dynamic-questions/QuestionTexbox';
import { of } from 'rxjs';

@Injectable()
/*
This service is needed to supply a specific set of questions from which to build an individual form.
The QuestionService supplies a set of questions in the form of an array bound to @Input() questions.
*/
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    let questions: QuestionBase<string>[] = [
      new QuestionDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new QuestionTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new QuestionTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
