import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces';
import { UUID } from 'angular2-uuid';

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

  usersServiceSub: Subscription;

  constructor(
    private usersService: CrudService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    const user: IUser = {
      id: '',
      ...formValue,
      role: 'USER',
      dateAdded: new Date(),
      nextPayment: new Date(),
    };
    user.id = UUID.UUID();

    console.log('submit');

    this.usersServiceSub = this.usersService
      .create('http://localhost:3000/users', user)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.userService.un
    this.usersServiceSub.unsubscribe();
  }
}
