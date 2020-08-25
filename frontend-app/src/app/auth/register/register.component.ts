import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from './../../auth/auth.service';
import * as CONSTANTS from './../../shared/assets/constants';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  isLoading: boolean = false;

  usersServiceSub: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public router: Router
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
    this.isLoading = true;
    const user: User = this.formatFormDetails(formValue);

    this.authService.checkExistingUser(user).subscribe(
      (users) => {
        if (users.length) {
          this.status = 'This email address is already in use.';
        } else {
          this.authService.register(user).subscribe(
            (addedUser: User) => {
              this.isLoading = false;
              this.status = `User ${addedUser.email} has been created and his id is: [${addedUser.id}]`;

              setTimeout(() => {
                this.router.navigate(['account/login']);
              }, 700);
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
