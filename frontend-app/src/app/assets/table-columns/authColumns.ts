import { emailRegex } from './emailRegex';
import { ITableColumn } from '../../interfaces/table';
export const authColumns: ITableColumn[] = [
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
