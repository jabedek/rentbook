import { Component } from '@angular/core';
import { ITableConfig } from '../../../interfaces';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent {
  config: ITableConfig = {
    name: 'users',
    url: `http://localhost:3000/users`,
    filterable: true,
    orderable: true,
    modals: true,
    columns: ['actions'],
  };
  // usersService: UsersCrudService;

  // addItemDialogComponent = AddUserFormComponent;
  // editItemDialogComponent = EditUserFormComponent;

  // constructor(service: UsersCrudService) {
  //   this.usersService = service;
  // }
}
