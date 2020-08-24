import { User } from './../../interfaces/user';
import { AuthService } from './../../auth/auth.service';
import * as CONSTANTS from '../../assets/constants/index';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  formName: string = 'register-form';
  columns = CONSTANTS.table.AUTH_COLUMNS;
  status: string = '';

  usersServiceSub: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  formatFormDetails(formValue): User {
    let date = new Date().toJSON().split('T')[0];

    const user: User = {
      ...formValue,
      role: 'USER',
      nextPayment: date,
    };

    return user;
  }

  onSubmit(formValue) {
    const user: User = this.formatFormDetails(formValue);

    this.authService.checkExistingUser(user).subscribe(
      (users) => {
        if (users.length) {
          this.status = 'This email address is already in use.';
        } else {
          this.authService.register(user).subscribe(
            (addedUser: User) => {
              this.status = `User ${addedUser.email} has been created and his id is: [${addedUser.id}]`;
            },
            (err) => (this.status += `Error: ${err}`)
          );
        }
      },
      (err) => (this.status += `Error: ${err}`)
    );
  }

  ngOnInit(): void {}
}
