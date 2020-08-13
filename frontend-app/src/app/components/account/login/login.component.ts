import { authColumns } from './../../../assets/table-columns/authColumns';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../../services/crud.service';

import { eventDispatcher } from '../../../store/reducer';
import { UserActionTypes } from '../../../store/actions';
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

  columns = authColumns;

  status: string = '';

  constructor(
    private usersService: CrudService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  private auth(loginDetails) {
    let authUser: IUser | null;
    this.usersService
      .readByProperty(
        'http://localhost:3000/users',
        'email',
        loginDetails.email
      )
      .subscribe(
        (users) => {
          // If there are user(s) found with provided email,
          // find a user with matching password and return it
          if (users.length) {
            let matchingUser = users.find(
              (user) => user.password === loginDetails.password
            );

            if (matchingUser) {
              authUser = matchingUser;

              // Save user to global state
              eventDispatcher.next({
                type: UserActionTypes.USER_LOGIN,
                payload: authUser,
              });

              this.status = 'Log in successful. Redirecting...';
              this.router.navigateByUrl('/');
            } else {
              authUser = null;
              this.status = 'Wrong credentials.';
            }
          } else {
            // If there is no user found, return null
            authUser = null;
            this.status = 'Wrong credentials.';
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onSubmit(formValue) {
    this.auth({ email: formValue.email, password: formValue.password });
  }

  resetForm() {
    this.loginForm.reset();
  }

  ngOnInit(): void {}
}
