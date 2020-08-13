import { Input } from '@angular/core';
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
  name: string;
  label: string;
  inputType: string;
  editable: boolean;
  orderable: boolean;
  filterable: boolean;
  validators: IValidatorTemplate[] | [];
  options?: ISelectOption[];
}

export class TableColumn implements ITableColumn {
  name: string;
  label: string;
  inputType: string;
  editable: boolean;
  orderable: boolean;
  filterable: boolean;
  validators: IValidatorTemplate[] | [];
  options: ISelectOption[];

  constructor(
    name: string,
    label?: string,
    inputType?: string,
    editable?: boolean,
    orderable?: boolean,
    filterable?: boolean,
    validators?: IValidatorTemplate[] | [],
    options?: ISelectOption[]
  ) {
    this.name = name;
    this.label = label;
    this.inputType = inputType;
    this.editable = editable;
    this.orderable = orderable;
    this.filterable = filterable;
    this.validators = validators;
    this.options = options;
  }
}

export interface ITableConfig {
  name: string;
  url: string;
  newItemOnto: 'table-end' | 'table-start';
  modals: boolean;
  columns: ITableColumn[];
}
