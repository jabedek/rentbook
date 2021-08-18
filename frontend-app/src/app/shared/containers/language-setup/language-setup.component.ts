import { AppState } from './../../interfaces/app-state';
import { LanguageCode } from './../../types/language-code';
import { Store } from '@ngrx/store';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-language-setup',
  templateUrl: './language-setup.component.html',
  styleUrls: ['./language-setup.component.scss'],
})
export class LanguageSetupComponent implements OnInit {
  @Output() pickLanguage = new EventEmitter();
  chosenLang: LanguageCode | null = null;

  constructor(public store: Store<AppState>) {}

  selectLang(lang: LanguageCode) {
    this.chosenLang = lang;
    this.store.dispatch({
      type: '[LANG SETUP] SET LANG',
      payload: this.chosenLang,
    });

    this.pickLanguage.emit(this.chosenLang);
  }
  ngOnInit(): void {}
}
