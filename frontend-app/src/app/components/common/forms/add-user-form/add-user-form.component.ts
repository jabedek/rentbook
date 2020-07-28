import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

import { User } from 'src/app/models/User';
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
})
export class AddUserFormComponent implements OnInit {
  addUserForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  rolesForm = this.formBuilder.group({
    role_USER: [true, Validators.required],
    role_ADMIN: [false, Validators.required],
  });

  resultMessage: string = '';

  constructor(
    private usersService: CrudService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  addUser(user: User) {
    // Check if there is already an account using provided email address
    // If email is already in use, display warning message
    // If it is not, add new user and display success message
    // If there are errors, display error message
    this.usersService
      .readByProperty('localhost:3000/users', 'email', user.email)
      .subscribe(
        (users) => {
          if (users.length) {
            this.resultMessage = 'This email address is already in use.';
          } else {
            this.usersService.create('localhost:3000/users', user).subscribe(
              (user) => {
                this.resultMessage = `User ${user.email} has been created successfully.]`;
              },
              (err) => (this.resultMessage += `Error: ${err}`)
            );
          }
        },
        (err) => (this.resultMessage += `Error: ${err}`)
      );
  }

  onSubmit(formValue) {
    console.log(this.rolesForm.value);

    const user: User = {
      id: UUID.UUID(),
      ...formValue,
      dateJoined: new Date().toLocaleString(),
      roles: {
        USER: this.rolesForm.value.role_USER,
        ADMIN: this.rolesForm.value.role_ADMIN,
      },
    };

    console.log('registering', user);
    this.addUser(user);
  }

  ngOnInit(): void {}
}
