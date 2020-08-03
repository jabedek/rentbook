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
        name: 'title',
        label: 'Title',
        inputType: 'text',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [{ name: 'required', value: true }],
      },

      {
        name: 'author',
        label: 'Author',
        inputType: 'text',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [{ name: 'required', value: true }],
      },

      {
        name: 'genre',
        label: 'Genre',
        inputType: 'text',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [{ name: 'required', value: true }],
      },

      {
        name: 'available',
        label: 'Available',
        inputType: 'radio',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [{ name: 'required', value: true }],
      },

      {
        name: 'dataAdded',
        label: 'Added on',
        inputType: 'radio',
        editable: false,
        orderable: false,
        filterable: true,
        validate: [{ name: 'required', value: true }],
      },
    ],
  };
}
