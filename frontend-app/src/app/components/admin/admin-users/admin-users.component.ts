import * as CONSTANTS from '../../../assets/constants/index';
import { Component } from '@angular/core';
import { ITableConfig } from '../../../interfaces/table';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent {
  config: ITableConfig = {
    name: 'users',
    newItemOnto: 'table-end',
    url: `http://localhost:3000/users`,
    modals: false,
    columns: CONSTANTS.table.USER_COLUMNS,
    defaulItemsPerPage: 5,
  };
}
