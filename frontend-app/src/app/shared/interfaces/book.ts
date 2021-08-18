export interface FormSubmitBook {
  title: string;
  author: string;
  genre: string;
}

export interface Book extends FormSubmitBook {
  id: string;
  dateAdded: Date | string;
}
