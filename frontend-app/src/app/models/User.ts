import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  id: string;
  email: string;
  password: string;

  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
