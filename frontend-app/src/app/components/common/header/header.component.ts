// import { SetLangAction } from './../../../store3/actions';
import { LanguageCode } from './../../../types/language-code';
import { InitState } from '../../../interfaces/store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

// import { DelAuthAction } from 'src/app/store3/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  auth$: any;
  lang$: any;
  authUser: any;
  wholeStore: any;
  stuff;

  constructor(private store: Store<InitState>) {}

  logout() {
    // this.store.dispatch(new DelAuthAction());
  }

  public setLang(lang: LanguageCode) {
    // this.store.dispatch(new SetLangAction(lang));
  }

  ngOnInit() {
    // this.auth$ = this.store.select((store: InitState) => store.auth);
    // this.auth$.subscribe((data: any) => {
    //   this.authUser = data.auth;
    // });
    // this.wholeStore = this.store.select((store: InitState) => store.lang);
    // this.stuff = this.wholeStore.subscribe((data) => console.log(data));
  }
}
