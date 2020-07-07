import { IBook } from '../interfaces/IBook';

export class Book implements IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  heldByClient: string | null | undefined;

  constructor(
    id: string,
    title: string,
    author: string,
    genre: string,
    available: boolean,
    heldByClient: string | null | undefined
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
    this.heldByClient = heldByClient;
  }
}
