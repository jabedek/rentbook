import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersCrudService } from '../../../services/users-crud.service';
import { User } from 'src/app/models/User';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  resultMessage: string = '';

  constructor(
    private usersService: UsersCrudService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    const user: User = {
      id: UUID.UUID(),
      ...formValue,
      dateJoined: new Date().toLocaleDateString(),

      roles: { USER: true, ADMIN: false },
    };

    console.log('registering', user);

    this.addUser(user);
  }

  addUser(user: User) {
    // Check if there is already an account using provided email address
    // If email is already in use, display warning message
    // If it is not, add new user and display success message
    // If there are errors, display error message
    this.usersService.readByProperty('email', user.email).subscribe(
      (users) => {
        if (users.length) {
          this.resultMessage = 'This email address is already in use.';
        } else {
          this.usersService.create(user).subscribe(
            (user) => {
              this.resultMessage = `User ${user.email} has been created and his id is: [${user.id}]`;
            },
            (err) => (this.resultMessage += `Error: ${err}`)
          );
        }
      },
      (err) => (this.resultMessage += `Error: ${err}`)
    );
  }

  ngOnInit(): void {}
}
