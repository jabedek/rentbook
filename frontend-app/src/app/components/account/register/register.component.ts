import { IRole } from './../../../interfaces/user';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { configureNewItem } from '../../../utils';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [CrudService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  resultMessage: string = '';

  constructor(
    private usersService: CrudService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    const roles: IRole[] = [
      { role: 'USER', value: true },
      { role: 'ADMIN', value: false },
    ];

    const user: IUser = configureNewItem({
      ...formValue,
      roles,
    });

    this.usersService
      .create('http://localhost:3000/users', user)
      .subscribe((err) => console.log(err))
      .unsubscribe();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.userService.un
  }
}
