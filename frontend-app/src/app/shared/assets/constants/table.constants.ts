import { EMAIL_REGEX } from './../constants/common.constants';
import { ITableColumn } from './../../interfaces/table';

export const AUTH_COLUMNS: ITableColumn[] = [
  {
    name: 'email',
    label: 'Email',
    inputType: 'email',
    editable: true,
    options: [],
    orderable: false,
    filterable: true,
    validators: [
      { label: 'required', value: true, parameters: [] },
      {
        label: 'email',
        value: true,
        parameters: [],
      },
      {
        label: 'pattern',
        value: true,
        // prettier-ignore
        parameters: [EMAIL_REGEX]
      },
    ],
  },

  {
    name: 'password',
    label: 'Password',
    inputType: 'password',
    editable: true,
    options: [],
    orderable: false,
    filterable: true,
    validators: [
      { label: 'required', value: true, parameters: [] },
      { label: 'minLength', value: true, parameters: ['8'] },
    ],
  },
];

export const BOOK_COLUMNS: ITableColumn[] = [
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
export const USER_COLUMNS: ITableColumn[] = [
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
    label: 'Joined on',
    inputType: 'date',
    editable: false,
    options: [],
    orderable: false,
    filterable: true,
    validators: [],
  },
  {
    name: 'password',
    label: 'Password',
    inputType: 'text',
    editable: true,
    options: [],
    orderable: false,
    filterable: true,
    validators: [
      { label: 'required', value: true, parameters: [] },
      { label: 'minLength', value: true, parameters: ['8'] },
    ],
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
      { label: 'required', value: true, parameters: [] },
      {
        label: 'email',
        value: true,
        parameters: [],
      },
      {
        label: 'pattern',
        value: true,

        // prettier-ignore
        parameters: [EMAIL_REGEX]
      },
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
    validators: [{ label: 'required', value: true, parameters: [] }],
  },

  {
    name: 'role',
    label: 'Role',
    inputType: 'select',
    editable: true,
    orderable: false,
    filterable: true,
    validators: [{ label: 'required', value: true, parameters: [] }],
    options: [
      { label: 'role', value: 'ADMIN' },
      { label: 'role', value: 'USER' },
    ],
  },
];
