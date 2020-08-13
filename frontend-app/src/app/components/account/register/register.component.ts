import { authColumns } from './../../../assets/table-columns/authColumns';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';

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

  columns = authColumns;

  status: string = '';

  usersServiceSub: Subscription;

  constructor(
    private usersService: CrudService,
    private formBuilder: FormBuilder
  ) {}

  resetForm() {
    this.registerForm.reset();
  }

  onSubmit(formValue) {
    let date = new Date().toJSON().split('T')[0];

    const user: IUser = {
      ...formValue,
      role: 'USER',
      nextPayment: date,
    };

    console.log('submit');

    this.usersServiceSub = this.usersService
      .readByProperty('http://localhost:3000/users', 'email', user.email)
      .subscribe(
        (users) => {
          if (users.length) {
            let msg = 'This email address is already in use.';
            this.status = msg;
          } else {
            this.usersService
              .create('http://localhost:3000/users', user)
              .subscribe(
                (user) => {
                  let msg = `User ${user.email} has been created and his id is: [${user.id}]`;
                  this.status = msg;
                },
                (err) => (this.status += `Error: ${err}`)
              );
          }
        },
        (err) => (this.status += `Error: ${err}`)
      );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.userService.un
    // this.usersServiceSub.unsubscribe();
  }
}
