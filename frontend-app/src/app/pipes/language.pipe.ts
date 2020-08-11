import { Pipe, PipeTransform, Input, Inject } from '@angular/core';

import * as PL from '../assets/json/languagePL.json';
import * as EN from '../assets/json/languageEN.json';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  @Input() chosenLang: string = 'PL';

  transform(label: string): unknown {
    label = label.toLowerCase();
    let data: any = null;
    switch (this.chosenLang) {
      case 'PL': {
        data = (PL as any).default;
        return data[label];
      }

      case 'EN': {
        data = (EN as any).default;
        return data[label];
      }

      default: {
        data = (EN as any).default;
        return data[label];
      }
    }
  }
}
