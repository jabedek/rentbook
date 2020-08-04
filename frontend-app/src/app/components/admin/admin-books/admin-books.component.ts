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
        options: [],
        orderable: false,
        filterable: true,
        validators: [],
      },

      {
        name: 'dateAdded',
        label: 'Added on',
        inputType: 'date',
        editable: false,
        options: [],
        orderable: false,
        filterable: true,
        validators: [],
      },

      {
        name: 'title',
        label: 'Title',
        inputType: 'text',
        editable: true,
        options: [],
        orderable: false,
        filterable: true,
        validators: [{ label: 'required', value: true, parameters: [] }],
      },

      {
        name: 'author',
        label: 'Author',
        inputType: 'text',
        editable: true,
        options: [],
        orderable: false,
        filterable: true,
        validators: [{ label: 'required', value: true, parameters: [] }],
      },

      {
        name: 'genre',
        label: 'Genre',
        inputType: 'text',
        editable: true,
        options: [],
        orderable: false,
        filterable: true,
        validators: [{ label: 'required', value: true, parameters: [] }],
      },
    ],
  };
}
