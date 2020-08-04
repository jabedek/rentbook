import { ISelectOption } from './table';

export interface IUser {
  id: string;
  email: string;
  password: string;
  nextPayment: Date;
  dateAdded: string;
  role: string;
}
