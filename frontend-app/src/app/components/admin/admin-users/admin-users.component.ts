import { Component } from '@angular/core';
import { ITableConfig, IUser } from '../../../interfaces';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent {
  formTemplate: IUser = {
    id: '',
    dateAdded: '',
    email: '',
    password: '',
    roles: { role_ADMIN: false, role_USER: true },
  };

  config: ITableConfig = {
    name: 'users',
    formTemplate: this.formTemplate,
    url: `http://localhost:3000/users`,
    filterable: true,
    orderable: true,
    modals: true,
    columns: ['actions'],
  };
}
