import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
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
    password: ['', Validators.required],
  });

  warningVisibility: string = 'hidden';
  result: string = '';

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    this.addUser({ id: UUID.UUID(), ...formValue });
  }

  addUser(user: User) {
    // Check if there is already an account using provided email address
    this.usersService.getUsersByProperty('email', user.email).subscribe(
      (users) => {
        // If email is already in use, display warning message
        // If it is not, add new user and display success message
        // If there are errors, display them
        if (users.length) {
          this.result = 'This email address is already in use.';
        } else {
          this.usersService.addUser(user).subscribe(
            (user) => {
              this.result = `User ${user.email} has been created and his id is: [${user.id}]`;
            },
            (err) => (this.result += `Error: ${err}`)
          );
        }
      },
      (err) => (this.result += `Error: ${err}`)
    );
  }

  ngOnInit(): void {}
}
