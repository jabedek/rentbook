import { AuthService } from './../../../services/auth.service';
import { Subscription } from 'rxjs';
import * as CONSTANTS from '../../../assets/constants/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../../services/crud.service';

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

  usersServiceSub: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    this.status = 'Processing...';
    this.authService.login(formValue);
  }

  ngOnInit(): void {}
}
