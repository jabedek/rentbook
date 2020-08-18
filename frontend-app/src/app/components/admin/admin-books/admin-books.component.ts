import { bookColumns } from '../../../assets/table-columns/bookColumns';
import { Component } from '@angular/core';
import { ITableConfig } from '../../../interfaces/table';

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
    columns: bookColumns,
  };
}
