export interface ISelectOption {
  label: string;
  value: string;
}

export interface IValidatorTemplate {
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
  validators: IValidatorTemplate[] | [];
  options?: ISelectOption[];
}

export interface ITableConfig {
  name: string;
  url: string;
  modals: boolean;
  columns: ITableColumn[];
}
