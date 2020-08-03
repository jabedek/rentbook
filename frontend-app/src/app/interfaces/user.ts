export interface IRole {
  role: string;
  value: boolean;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  dateAdded: string;
  roles: IRole[];
}
