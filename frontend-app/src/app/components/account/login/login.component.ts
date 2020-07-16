import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
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

  warningVisibility: string = 'hidden';
  result: string = '';

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    const loginDetails = {
      email: formValue.email,
      password: formValue.password,
    };

    this.usersService.authenticate(loginDetails);
  }

  ngOnInit(): void {
    // this.getUsers();
  }
}
