import { LanguageCode } from './types/language-code';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Book Rental';
  isLangSet: LanguageCode | '' = '';

  handlePickLang(stuff) {
    console.log(stuff);

    this.isLangSet = stuff;
    console.log(this.isLangSet);
  }

  ngOnInit() {}
}
