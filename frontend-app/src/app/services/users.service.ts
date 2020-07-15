import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

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

  users: User[];

  constructor(private http: HttpClient) {}

  // Get Users table
  getUsers(): User[] {
    const url = `${this.rentalURL}/${this.tableName}`;

    this.http.get<User[]>(url).subscribe((users) => {
      this.users = users;
    });
    console.log(this.users);

    return this.users;
  }

  // Get User by property's value
  getUsersByProperty(
    searchKey: string,
    searchValue: string
  ): Observable<User[]> {
    const url = `${this.rentalURL}/${this.tableName}?${searchKey}=${searchValue}`;

    return this.http.get<User[]>(url);
  }

  authenticate({ email, password }) {
    const result = this.getUsersByProperty('email', email).subscribe(
      (users) => {
        if (users) {
          console.log('login: ', users);
          // users.filter((user) => {});
        }

        return users;
      },
      (err) => {
        console.log(err);

        return err;
      }
    );
  }

  addUser(user: User): Observable<User> {
    const url = `${this.rentalURL}/${this.tableName}`;

    return this.http.post<User>(url, user, httpOptions);
  }
}
