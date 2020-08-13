import { emailRegex } from './emailRegex';
import { ITableColumn } from '../../interfaces/table';
export const userColumns: ITableColumn[] = [
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
        parameters: [emailRegex]
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
