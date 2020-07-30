import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  id: string;
  dateAdded: string;
  email: string;
  password: string;
  role: string;

  constructor(id, email, password, dateAdded, role) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.dateAdded = dateAdded;
    this.role = role;
  }
}
