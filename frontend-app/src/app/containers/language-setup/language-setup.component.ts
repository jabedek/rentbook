import { LanguageCode } from './../../types/language-code';
import { Store } from '@ngrx/store';
import { AppState } from './../../store/reducers/index';
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
    this.store.dispatch({ type: this.chosenLang });
    console.log('emiting', this.chosenLang);

    this.pickLanguage.emit(this.chosenLang);
  }
  ngOnInit(): void {}
}
