import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

interface CrudOperations<T, ID> {
  create(data: T): Observable<T>;
  update(id: ID, data: T): Observable<T>;
  readOne(id: ID): Observable<T>;
  readByProperty(searchKey: string, searchValue: string): Observable<T[]>;
  read(): Observable<T[]>;
  delete(id: ID): Observable<any>;
}

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {
  constructor(protected _http: HttpClient, protected _base: string) {}

  create(data: T): Observable<T> {
    const url = this._base;
    return this._http.post<T>(url, data);
  }

  update(id: ID, data: T): Observable<T> {
    const url = this._base + '/' + id;
    return this._http.put<T>(url, data, {});
  }

  readOne(id: ID): Observable<T> {
    const url = this._base + '/' + id;
    return this._http.get<T>(url);
  }

  readByProperty(searchKey: string, searchValue: string): Observable<T[]> {
    const url = `${this._base}?${searchKey}=${searchValue}`;
    return this._http.get<T[]>(url);
  }

  read(): Observable<T[]> {
    const url = this._base;
    return this._http.get<T[]>(url);
  }

  delete(id: ID): Observable<T> {
    const url = this._base + '/' + id;
    return this._http.delete<T>(url, httpOptions);
  }
}
