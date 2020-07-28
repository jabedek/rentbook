import { Component } from '@angular/core';
import { ITableConfig } from '../../../interfaces';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss'],
  providers: [],
})
export class AdminBooksComponent {
  config: ITableConfig = {
    name: 'books',
    url: `http://localhost:3000/books`,
    filterable: true,
    orderable: true,
    modals: true,
    columns: ['actions'],
  };
}
