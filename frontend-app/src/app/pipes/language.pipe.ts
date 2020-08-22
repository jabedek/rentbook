import { AppState } from './../store/reducers/index';
import { Store, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform, Input, Inject } from '@angular/core';

import * as PL from '../assets/json/languagePL.json';
import * as EN from '../assets/json/languageEN.json';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  cachedLang: any = null;
  chosenLang$: Observable<string> = this.store.pipe(
    select((state: AppState) => state.language.lang)
  );

  constructor(private store: Store<AppState>) {
    // this.store.dispatch({ type: 'EN' });
  }

  transform(label: string): unknown {
    label = label.toLowerCase();

    this.chosenLang$.subscribe((data) => {
      this.cachedLang = data;
      console.log(this.cachedLang);
    });

    switch (this.cachedLang) {
      case 'PL': {
        let languageJSON = (PL as any).default;
        return languageJSON[label];
      }

      case 'EN': {
        let languageJSON = (EN as any).default;
        return languageJSON[label];
      }

      default: {
        let languageJSON = (EN as any).default;
        return languageJSON[label];
      }
    }
  }
}
