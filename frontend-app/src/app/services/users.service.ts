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

  // Get Users table and return it
  getUsers(): User[] {
    const url = `${this.rentalURL}/${this.tableName}`;

    this.http.get<User[]>(url).subscribe((users) => {
      this.users = users;
    });
    console.log(this.users);

    return this.users;
  }

  // Get Users table (filtered out on server side)
  getUsersByProperty(
    searchKey: string,
    searchValue: string
  ): Observable<User[]> {
    const url = `${this.rentalURL}/${this.tableName}?${searchKey}=${searchValue}`;

    return this.http.get<User[]>(url);
  }

  authenticate({ email, password }): User | null {
    let authUser: User | null;

    console.log('provided details:', email, password);

    // Get all users with provided email (ideally should return null or one)
    this.getUsersByProperty('email', email).subscribe(
      (users) => {
        // If there are user(s) found with provided email,
        // find a user with matching password and return it
        if (users.length) {
          let matchingUser = users.find((user) => user.password === password);

          if (matchingUser) {
            authUser = matchingUser;
          } else authUser = null;
        } else {
          // If there are no user(s) found, return null
          authUser = null;
        }
      },
      (err) => {
        console.log(err);
      }
    );

    return authUser;
  }

  addUser(user: User): Observable<User> {
    const url = `${this.rentalURL}/${this.tableName}`;

    return this.http.post<User>(url, user, httpOptions);
  }
}
