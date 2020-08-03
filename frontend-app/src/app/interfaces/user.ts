import { ISelectOption } from './table';

export interface IUser {
  id: string;
  email: string;
  password: string;
  nextPayment: Date;
  role: string;
}
