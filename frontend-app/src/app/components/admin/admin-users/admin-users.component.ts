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
        editable: true,
        options: [],
        orderable: false,
        filterable: true,
        validators: [{ label: 'required', value: true }],
      },
      {
        name: 'password',
        label: 'Password',
        inputType: 'text',
        editable: true,
        options: [],
        orderable: false,
        filterable: true,
        validators: [{ label: 'required', value: true }],
      },

      {
        name: 'email',
        label: 'Email',
        inputType: 'email',
        editable: true,
        options: [],
        orderable: false,
        filterable: true,
        validators: [
          { label: 'required', value: true },
          { label: 'email', value: true },
        ],
      },
      {
        name: 'nextPayment',
        label: 'Next payment date',
        inputType: 'date',
        editable: true,
        options: [],
        orderable: false,
        filterable: true,
        validators: [{ label: 'required', value: true }],
      },
      {
        name: 'role',
        label: 'Role',
        inputType: 'select',
        editable: true,
        orderable: false,
        filterable: true,
        validators: [{ label: 'required', value: true }],
        options: [
          { label: 'role', value: 'ADMIN' },
          { label: 'role', value: 'USER' },
        ],
      },
    ],
  };
}
