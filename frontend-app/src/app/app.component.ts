import { LanguageCode } from './shared/types/language-code';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLangSet: LanguageCode | '' = '';

  handlePickLang(lang) {
    this.isLangSet = lang;
  }

  ngOnInit() {}
}
