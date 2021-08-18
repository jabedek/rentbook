import { Component } from '@angular/core';
import * as CONSTANTS from './../../shared/assets/constants';
import { ITableConfig } from './../../shared/interfaces/table';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss'],
})
export class AdminBooksComponent {
  config: ITableConfig = {
    name: 'books',
    newItemOnto: 'table-end',
    url: `http://localhost:3000/books`,
    modals: true,
    columns: CONSTANTS.table.BOOK_COLUMNS,
    defaulItemsPerPage: 5,
  };
}
