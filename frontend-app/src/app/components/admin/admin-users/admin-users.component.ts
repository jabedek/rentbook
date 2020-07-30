import { Component } from '@angular/core';
import { ITableConfig } from '../../../interfaces';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent {
  formTemplate: User = {
    id: '',
    dateAdded: '',
    email: '',
    password: '',
    role: '',
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
