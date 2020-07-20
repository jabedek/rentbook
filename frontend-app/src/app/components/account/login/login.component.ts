import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersCrudService } from '../../../services/users-crud.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { eventDispatcher, store } from '../../../store/reducer';
import { ActionTypes } from '../../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  resultMessage: string = '';

  constructor(
    private usersService: UsersCrudService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(formValue) {
    this.auth({ email: formValue.email, password: formValue.password });
  }

  auth(loginDetails) {
    let authUser: User | null;
    this.usersService.readByProperty('email', loginDetails.email).subscribe(
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
              type: ActionTypes.USER_LOGIN,
              payload: authUser,
            });

            this.resultMessage = 'Log in successful. Redirecting...';
            this.router.navigateByUrl('/');
          } else {
            authUser = null;
            this.resultMessage = 'Wrong credentials.';
          }
        } else {
          // If there is no user found, return null
          authUser = null;
          this.resultMessage = 'Wrong credentials.';
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
