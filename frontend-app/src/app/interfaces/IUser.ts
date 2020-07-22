export interface IUser {
  id: string;
  email: string;
  password: string;
  dateJoined: Date;
  roles: { USER: boolean; ADMIN: boolean };
}
