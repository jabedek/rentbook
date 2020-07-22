import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

import { User } from 'src/app/models/User';
import { UsersCrudService } from '../../../../services/users-crud.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss'],
})
export class EditUserFormComponent implements OnInit {
  editUserForm = this.formBuilder.group({
    email: [this.data.email, Validators.required],
    password: [this.data.password, Validators.required],
  });
  rolesForm = this.formBuilder.group({
    role_USER: [this.data.roles.USER, Validators.required],
    role_ADMIN: [this.data.roles.ADMIN, Validators.required],
  });
  result: string = '';

  constructor(
    private usersService: UsersCrudService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  editUser(user: User) {
    this.usersService.update(user.id, user).subscribe(
      (user) => {
        this.result = `User "${user.email}" was successfully updated.`;
      },
      (err) => (this.result = err)
    );
  }

  onSubmit(formValue) {
    console.log('edit', formValue);
    console.log('roles', this.rolesForm.value);

    const item: User = {
      id: this.data.id,
      email: formValue.email,
      password: formValue.password,
      dateJoined: this.data.dateJoined,
      roles: {
        USER: this.rolesForm.value.role_USER,
        ADMIN: this.rolesForm.value.role_ADMIN,
      },
    };

    this.editUser(item);
  }

  ngOnInit(): void {}
}
