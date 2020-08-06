import { BackendData } from './../types/BackendData';
import { Injectable, Inject } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

interface CrudOperations {
  create(baseURL: string, data: BackendData): Observable<any>;
  update(baseURL: string, id: string, data: BackendData): Observable<any>;
  read(baseURL: string): Observable<any[]>;
  readOne(baseURL: string, id: string): Observable<any>;
  readByProperty(
    baseURL: string,
    searchKey: string,
    searchValue: string
  ): Observable<any[]>;
  delete(baseURL: string, id: string): Observable<any>;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService implements CrudOperations {
  constructor(protected _http: HttpClient) {}

  create(baseURL: string, data: BackendData): Observable<any> {
    const url = baseURL;
    return this._http.post<any>(url, this.prepackNewItem(data));
  }

  update(baseURL: string, id: string, data: BackendData): Observable<any> {
    const url = baseURL + '/' + id;
    return this._http.put<any>(url, data, httpOptions);
  }

  readOne(baseURL: string, id: string): Observable<any> {
    const url = baseURL + '/' + id;
    return this._http.get<any>(url);
  }

  readByProperty(
    baseURL: string,
    searchKey: string,
    searchValue: string
  ): Observable<any[]> {
    const url = `${baseURL}?${searchKey}=${searchValue}`;
    return this._http.get<any[]>(url);
  }

  filter(baseURL: string, filterTemplate) {
    let propertiesQuery = '';
    let keys = Object.keys(filterTemplate);

    keys.forEach((k) => {
      if (filterTemplate[k]) propertiesQuery += `&${k}=${filterTemplate[k]}`;
    });

    const url = `${baseURL}?${propertiesQuery}`;
    return this._http.get<any[]>(url);
  }

  read(baseURL: string): Observable<any[]> {
    const url = baseURL;
    return this._http.get<any[]>(url);
  }

  delete(baseURL: string, id: string): Observable<any> {
    const url = baseURL + '/' + id;
    return this._http.delete<any>(url, httpOptions);
  }

  // To every created item add 'id' and 'dateAdded' properties.
  private prepackNewItem(item): BackendData {
    // Translate output JSON date "2020-08-06T12:08:29.649Z"
    // to "2020-08-06" so that it matches Datepicker format
    // used across the app.
    let date = new Date().toJSON().split('T')[0];
    console.log(date);

    let prepackedItem: BackendData = {
      id: '',
      ...item,
      dateAdded: date,
    };

    prepackedItem.id = UUID.UUID();

    return prepackedItem;
  }
}
