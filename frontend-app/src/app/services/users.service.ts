import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { UUID } from 'angular2-uuid';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  rentalURL: string = 'http://localhost:3000';
  tableName: string = 'users';

  constructor(private http: HttpClient) {}

  // Get Books table
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.rentalURL}/${this.tableName}`);
  }

  deleteBook(book: Book): Observable<Book> {
    const url = `${this.rentalURL}/${this.tableName}/${book.id}`;
    return this.http.delete<Book>(url, httpOptions);
  }

  // Add Book
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(
      `${this.rentalURL}/${this.tableName}`,
      book,
      httpOptions
    );
  }

  populateBooks(): Book[] {
    const booksArray = [
      new Book(
        UUID.UUID(),
        'The Lord of The Rings',
        'J. R. R. Tolkien',
        'Fantasy',
        true,
        '00000000-0000-0000-0000-000000000000'
      ),
      new Book(
        UUID.UUID(),
        "Harry Potter: Philosopher's Stone",
        'J. K. Rowling',
        'Fantasy',
        true,
        '00000000-0000-0000-0000-000000000000'
      ),
      new Book(
        UUID.UUID(),
        'The UNIX-HATERS Handbook',
        'Simson Garfinkel',
        'Learning/technology',
        true,
        '00000000-0000-0000-0000-000000000000'
      ),
    ];

    booksArray.forEach((book) => {
      this.addBook(book);
    });

    return booksArray;
  }
}
