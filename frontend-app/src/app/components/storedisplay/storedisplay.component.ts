import { select, Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

// import { State } from '../../store/reducers';
import { LanguageState } from 'src/app/store/reducers/language.reducer';

@Component({
  selector: 'app-storedisplay',
  template: ` {{ language | async }} `,
})
export class StoredisplayComponent implements OnInit {
  language: Observable<string> = this.store.pipe(
    select((state: any) => state.language.lang)
  );

  constructor(private store: Store) {}

  ngOnInit() {
    setInterval(() => this.store.dispatch({ type: 'NEXT' }), 1000);
  }
}
