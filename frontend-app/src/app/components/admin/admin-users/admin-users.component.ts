import { Component } from '@angular/core';
import { UsersCrudService } from '../../../services/users-crud.service';
import { AddUserFormComponent } from '../../common/forms/add-user-form/add-user-form.component';
import { EditUserFormComponent } from '../../common/forms/edit-user-form/edit-user-form.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent {
  usersService: UsersCrudService;

  addItemDialogComponent = AddUserFormComponent;
  editItemDialogComponent = EditUserFormComponent;

  constructor(service: UsersCrudService) {
    this.usersService = service;
  }
}
