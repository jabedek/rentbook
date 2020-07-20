import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksCrudService extends CrudService<Book, string> {
  constructor(protected _http: HttpClient) {
    super(_http, 'http://localhost:3000/books');
  }
}
