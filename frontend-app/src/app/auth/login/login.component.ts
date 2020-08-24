import { AuthService } from './../../auth/auth.service';
import * as CONSTANTS from '../../assets/constants/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';

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
  columns = CONSTANTS.table.AUTH_COLUMNS;
  status: string = '';

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  onSubmit(formValue) {
    this.status = 'Processing...';

    this.authService.login$(formValue).subscribe(
      (users) => {
        if (users.length) {
          let matchingUser = users.find(
            (user) => user.password === formValue.password
          );

          if (matchingUser) {
            this.authService.toStore(matchingUser);
            this.authService.isLogged = true;
            this.status = '';

            this.router.navigate([this.authService.redirectUrl]);
          }
        }
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
