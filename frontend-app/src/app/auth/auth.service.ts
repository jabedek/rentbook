import { CrudService } from 'src/app/crud-table/crud.service';
import { AppState } from './../interfaces/app-state';
import { User } from 'src/app/interfaces/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as fromAuth from './../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth$: Observable<any> = this.store.pipe(select((state: any) => state.auth));
  redirectUrl: string = '';
  isLogged: null | User = null;
  constructor(
    private store: Store<AppState>,
    private crudService: CrudService
  ) {}

  login(formValue) {
    return this.checkExistingUser(formValue);
  }

  toStore(user) {
    this.store.dispatch({
      type: fromAuth.SET_AUTH,
      payload: user,
    });
  }

  register(user: User) {
    return this.crudService.create('http://localhost:3000/users', user);
  }

  logout() {
    this.store.dispatch({ type: fromAuth.CLEAR_AUTH });
    this.isLogged = null;
  }

  checkExistingUser(formValue) {
    return this.crudService.readByProperty(
      'http://localhost:3000/users',
      'email',
      formValue.email
    );
  }

  getRole(): null | string {
    return this.isLogged ? this.isLogged.role : null;
  }
}
