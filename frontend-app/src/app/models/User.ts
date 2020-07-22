import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  id: string;
  email: string;
  password: string;
  dateJoined: Date;
  roles: { USER: boolean; ADMIN: boolean };

  constructor(id, email, password, dateJoined, roles) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.dateJoined = dateJoined;
    this.roles = roles;
  }
}
