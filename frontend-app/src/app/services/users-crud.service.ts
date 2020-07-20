import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersCrudService extends CrudService<User, string> {
  constructor(protected _http: HttpClient) {
    super(_http, 'http://localhost:3000/users');
  }
}
