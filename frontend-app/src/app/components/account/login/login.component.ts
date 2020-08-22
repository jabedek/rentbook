import { Subscription } from 'rxjs';
import { authColumns } from './../../../assets/table-columns/authColumns';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../../services/crud.service';

import { InitState } from './../../../interfaces/store';
import { Store } from '@ngrx/store';

import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CrudService],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  formName: string = 'login-form';
  columns = authColumns;
  status: string = '';

  usersServiceSub: Subscription;

  constructor(
    private usersService: CrudService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<InitState>
  ) {}

  onSubmit(formValue) {
    let authUser: IUser | null;
    this.usersServiceSub = this.usersService
      .readByProperty('http://localhost:3000/users', 'email', formValue.email)
      .subscribe(
        (users) => {
          // # If there are user(s) found with provided email, find a user with matching password and return it
          if (users.length) {
            let matchingUser = users.find(
              (user) => user.password === formValue.password
            );

            if (matchingUser) {
              authUser = matchingUser;

              // # Save user to global state
              // eventDispatcher.next({
              //   type: UserActionTypes.USER_LOGIN,
              //   payload: authUser,
              // });
              this.saveToStore(authUser);

              this.status = 'Log in successful. Redirecting...';
              this.router.navigateByUrl('/');
            } else {
              authUser = null;
              this.status = 'There is no user with these credentials.';
            }
          } else {
            // # If there is no user found, return null
            authUser = null;
            this.status = 'Wrong credentials.';
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
  saveToStore(user: IUser) {
    console.log('saving to store');

    // this.store.dispatch(new SetAuthAction(user));
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
