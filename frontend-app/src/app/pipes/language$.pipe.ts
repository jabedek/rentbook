import { AppState } from './../store/reducers/index';
import { Store, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform, Input, Inject } from '@angular/core';

import * as PL from '../assets/json/languagePL.json';
import * as EN from '../assets/json/languageEN.json';

@Pipe({
  name: 'language$',
})
export class Language$Pipe implements PipeTransform {
  chosenLang$: Observable<string> = this.store.pipe(
    select((state: AppState) => state.language.lang)
  );

  data: any;
  constructor(private store: Store<AppState>) {
    this.store.dispatch({ type: 'NEXT' });
    // this.chosenLang$.subscribe();
  }

  cachedData: any = null;
  chosenLang: string = 'PL';

  transform(label: string, lang = 'EN'): unknown {
    label = label.toLowerCase();
    let languageJSON: JSON = null;
    this.chosenLang$.subscribe((data) => {
      this.cachedData = data;
    });
    switch (this.cachedData) {
      case 'PL': {
        languageJSON = (PL as any).default;
        // this.data = this.chosenLang$.subscribe((data: string) => {
        //   return data;
        // });
        // console.log('data', languageJSON);
        // console.log('this.data', this.data);
        // console.log(
        //   '##',
        //   this.chosenLang$.subscribe((data) => data)
        // );

        return languageJSON[label];

        // return this.cachedData;
      }

      case 'EN': {
        languageJSON = (EN as any).default;
        return languageJSON[label];
      }

      default: {
        languageJSON = (EN as any).default;
        return languageJSON[label];
      }
    }
  }
}
