import { UUID } from 'angular2-uuid';

export function configureNewItem(data) {
  let item = {
    id: '',
    ...data,
  };

  item.id = UUID.UUID();

  return item;
}
