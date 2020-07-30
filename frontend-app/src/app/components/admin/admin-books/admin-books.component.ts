import { Component } from '@angular/core';
import { ITableConfig } from '../../../interfaces';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss'],
  providers: [],
})
export class AdminBooksComponent {
  formTemplate: Book = {
    id: '',
    title: '',
    author: '',
    genre: '',
    available: false,
    heldByClient: '',
  };

  config: ITableConfig = {
    name: 'books',
    formTemplate: this.formTemplate,
    url: `http://localhost:3000/books`,
    filterable: true,
    orderable: true,
    modals: true,
    columns: ['actions'],
  };
}
