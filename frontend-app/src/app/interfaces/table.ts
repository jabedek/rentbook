export interface ISelectOption {
  label: string;
  value: string;
}

export interface IValidator {
  label: string;
  value: boolean;
  parameters: any[]; // for i.e. regex or min-max values
}

export interface ITableColumn {
  label: string;
  name: string;
  inputType: string;
  editable: boolean;
  orderable: boolean;
  filterable: boolean;
  validators: IValidator[] | [];
  options?: ISelectOption[];
}

export interface ITableConfig {
  name: string;
  url: string;
  modals: boolean;
  columns: ITableColumn[];
}
