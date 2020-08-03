import { IValidator } from './IValidator';

export interface IColumn {
  label: string;
  name: string;
  inputType: string;
  editable: boolean;
  orderable: boolean;
  filterable: boolean;
  validate: IValidator[] | [];
}

export interface ITableConfig {
  name: string;
  url: string;
  modals: boolean;
  columns: IColumn[];
}
