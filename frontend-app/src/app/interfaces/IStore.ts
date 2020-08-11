import { IUser } from './user';

export interface IStore {
  loggedUser: IUser | null;
  language: string;
}
