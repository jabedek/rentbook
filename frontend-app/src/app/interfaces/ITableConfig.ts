export interface ITableConfig {
  name: string;
  url: string;
  filterable: boolean;
  orderable: boolean;
  modals: boolean;
  columns: string[];
}
