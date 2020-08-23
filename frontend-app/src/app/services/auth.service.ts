import { CrudService } from 'src/app/services/crud.service';
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
  constructor(
    private store: Store<AppState>,
    private crudService: CrudService
  ) {
    this.isLoggedIn();
    this.getRole();
  }

  register(user: User) {
    return this.crudService.create('http://localhost:3000/users', user);
  }

  login(formValue) {
    this.crudService
      .readByProperty('http://localhost:3000/users', 'email', formValue.email)
      .subscribe(
        (users) => {
          // # If there are user(s) found with provided email, find a user with matching password and return it
          if (users.length) {
            let matchingUser = users.find(
              (user) => user.password === formValue.password
            );

            if (matchingUser) {
              this.store.dispatch({
                type: fromAuth.SET_AUTH,
                payload: matchingUser,
              });
            }
          }
        },
        (err) => console.log(err)
      );
  }

  logout() {
    this.store.dispatch({ type: fromAuth.CLEAR_AUTH });
  }

  checkExistingUser(user) {
    return this.crudService.readByProperty(
      'http://localhost:3000/users',
      'email',
      user.email
    );
  }

  isLoggedIn(): boolean {
    this.auth$.subscribe((data) => {
      return !!data.auth;
    });
    return false;
  }

  getRole() {
    let role = '';
    this.auth$.subscribe((data) => {
      if (data.auth) {
        role += data.auth.role;
        console.log(role);
        return role;
      }
    });
  }
}
