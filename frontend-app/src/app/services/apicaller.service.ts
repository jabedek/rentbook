import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APICallerService {
  rentalURL: string = 'http://localhost:3000/';
  booksURN: string = 'books';

  constructor(private http: HttpClient) {}

  // Get Books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.rentalURL}${this.booksURN}`);
  }
}
