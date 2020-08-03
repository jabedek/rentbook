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
    modals: true,

    columns: [
      {
        name: 'id',
        label: 'ID',
        inputType: 'text',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [{ name: 'required', value: true }],
      },
      {
        name: 'name',
        label: 'Name',
        inputType: 'text',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [{ name: 'required', value: true }],
      },

      {
        name: 'email',
        label: 'Email',
        inputType: 'email',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [
          { name: 'required', value: true },
          { name: 'email', value: true },
        ],
      },
    ],
  };
}
