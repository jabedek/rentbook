import { AppState } from './../interfaces/app-state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import * as PL from './../assets/json/language-PL.json';
import * as EN from './../assets/json/language-EN.json';
import { translate } from './language.helpers';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  cachedLang: any = null;
  chosenLang$: Observable<string> = this.store.pipe(
    select((state: AppState) => state.language.lang)
  );

  constructor(private store: Store<AppState>) {}

  transform(label: string): unknown {
    this.chosenLang$.subscribe((data) => {
      this.cachedLang = data;
    });

    switch (this.cachedLang) {
      case 'PL': {
        let languageJSON = (PL as any).default;
        let translation = translate(languageJSON, label);
        return translation;
      }

      case 'EN': {
        let languageJSON = (EN as any).default;
        let translation = translate(languageJSON, label);
        return translation;
      }

      default: {
        let languageJSON = (EN as any).default;
        let translation = translate(languageJSON, label);
        return translation;
      }
    }
  }
}
