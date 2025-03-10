import { BackendData } from './../shared/types/backend-data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as fromAuth from './../shared/store/actions/auth.actions';
import { CrudService } from 'src/app/crud-table/crud.service';
import { AppState } from './../shared/interfaces/app-state';
import { User, FormSubmitUser } from './../shared/interfaces/user';

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

  register(user: FormSubmitUser) {
    return this.crudService.create('http://localhost:3000/users', user);
  }

  logout() {
    this.store.dispatch({ type: fromAuth.CLEAR_AUTH });
    this.isLogged = null;
  }

  checkExistingUser(formValue): Observable<BackendData[]> {
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
