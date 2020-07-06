import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  rentalURL: string = 'http://localhost:3000';

  booksTable: string = 'books';
  clientsTable: string = 'clients';
  usersTable: string = 'users';
  ordersTable: string = 'orders';

  constructor(private http: HttpClient) {}

  // Get Books table
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.rentalURL}/${this.booksTable}`);
  }

  deleteBook(book: Book): Observable<Book> {
    const url = `${this.rentalURL}/${this.booksTable}/${book.id}`;
    return this.http.delete<Book>(url, httpOptions);
  }

  // Add Book
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(
      `${this.rentalURL}/${this.booksTable}`,
      book,
      httpOptions
    );
  }
}
