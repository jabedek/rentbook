import { ITableColumn } from '../../interfaces/table';
export const bookColumns: ITableColumn[] = [
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
];
