import { IBook } from '../interfaces/IBook';

export class Book implements IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  heldByClient: number | null | undefined;

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
