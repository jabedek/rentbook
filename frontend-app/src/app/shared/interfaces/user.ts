export interface User {
  id: string;
  email: string;
  password: string;
  nextPayment: Date | string;
  dateAdded: string;
  role: string;
}
