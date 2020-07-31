import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { CrudService } from '../../../../services/crud.service';
import { IUser } from 'src/app/interfaces';

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
    private usersService: CrudService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  editUser(user: IUser) {
    this.usersService.update('localhost:3000/users', user.id, user).subscribe(
      (user) => {
        this.result = `User "${user.email}" was successfully updated.`;
      },
      (err) => (this.result = err)
    );
  }

  onSubmit(formValue) {
    console.log('edit', formValue);
    console.log('roles', this.rolesForm.value);

    const item: IUser = {
      id: this.data.id,
      email: formValue.email,
      password: formValue.password,
      dateAdded: this.data.dateAdded,
      roles: { role_ADMIN: false, role_USER: true },
      // roles: {
      //   USER: this.rolesForm.value.role_USER,
      //   ADMIN: this.rolesForm.value.role_ADMIN,
      // },
    };

    this.editUser(item);
  }

  ngOnInit(): void {}
}
