import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
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
  private rentalURL: string = 'http://localhost:3000';
  private tableName: string = 'users';

  constructor(private http: HttpClient) {}

  // Get Users table
  getUsers(): Observable<User[]> {
    const url = `${this.rentalURL}/${this.tableName}`;
    return this.http.get<User[]>(url);
  }

  // Get User by property's value
  getUser(searchKey: string, searchValue: string): Observable<User> {
    const url = `${this.rentalURL}/${this.tableName}?${searchKey}=${searchValue}`;
    return this.http.get<User>(url);
  }

  authenticate(loginDetails) {
    const result = this.getUser('email', loginDetails.email).subscribe(
      (user) => {
        return user;
      },
      (err) => {
        return err;
      }
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.rentalURL}/${this.tableName}`,
      user,
      httpOptions
    );
  }
}
