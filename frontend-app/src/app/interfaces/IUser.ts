export interface IUser {
  id: string;
  email: string;
  password: string;
  dateAdded: string;
  roles: { role_USER: boolean; role_ADMIN: boolean };
}
