export interface IOperationsCRUD {
  create(data);
  read(options?);
  update(data);
  delete(data);
}
