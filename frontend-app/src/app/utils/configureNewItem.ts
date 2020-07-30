import { UUID } from "angular2-uuid";

export function configureNewItem(data) {
  let item = {
    id: "",
    ...data,
    dateAdded: new Date().toLocaleDateString(),
  };

  item.id = UUID.UUID();

  return item;
}
