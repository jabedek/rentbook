import { BackendData } from '../types/backend-data';
import { Injectable, Inject } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const defaultItemsLimit = 5;

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
  readById(baseURL: string, id: string): Observable<any>;
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

  create(baseURL: string, data: BackendData): Observable<BackendData> {
    const url = baseURL;
    return this._http.post<any>(url, this.prepackNewItem(data));
  }

  read(baseURL: string): Observable<any[]> {
    const url = baseURL;
    return this._http.get<any[]>(url);
  }

  update(baseURL: string, id: string, data: BackendData): Observable<any> {
    console.log('update');

    const url = baseURL + '/' + id;
    return this._http.put<any>(url, data, httpOptions);
  }

  delete(baseURL: string, id: string): Observable<any> {
    const url = baseURL + '/' + id;
    return this._http.delete<any>(url, httpOptions);
  }

  readById(baseURL: string, id: string): Observable<any> {
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

  readPagedFiltered(
    baseURL: string,
    filterTemplate: BackendData | null,
    pageIndex: number,
    itemsLimit?: number
  ): Observable<any> {
    let filterQuery = '';

    if (filterTemplate) {
      Object.keys(filterTemplate).forEach((key) => {
        if (filterTemplate[key])
          filterQuery += `&${key}=${filterTemplate[key]}`;
      });
    }

    let limit = itemsLimit ? itemsLimit : defaultItemsLimit;
    let paginationQuery = `&_page=${pageIndex}&_limit=${limit}`;

    let url = `${baseURL}?${filterQuery}${paginationQuery}`;

    // console.log('[url]: ', url);

    return this._http.get<any[]>(url, { observe: 'response' });
  }

  private prepackNewItem(item): BackendData {
    let date = new Date().toJSON().split('T')[0];

    let prepackedItem: BackendData = {
      id: '',
      ...item,
      dateAdded: date,
    };

    prepackedItem.id = UUID.UUID();

    return prepackedItem;
  }
}
