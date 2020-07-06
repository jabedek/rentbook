import { IBook } from '../interfaces/IBook';

export class Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  heldByClient?: number;

  constructor(
    title: string,
    author: string,
    available: boolean,
    id: number,
    heldByClient?: number
  ) {
    this.title = title;
    this.author = author;
    this.available = available;
    this.heldByClient = heldByClient;
    if (id) {
      this.id = id;
    }
  }
}
