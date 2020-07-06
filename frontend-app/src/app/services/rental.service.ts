import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  rentalURL: string = 'http://localhost:3000/';

  booksTable: string = 'books';
  clientsTable: string = 'clients';
  usersTable: string = 'users';
  ordersTable: string = 'orders';

  constructor(private http: HttpClient) {}

  // Get any Table
  getTable(table: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.rentalURL}${table}`);
  }

  // Get Books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.rentalURL}${this.booksTable}`);
  }
}
