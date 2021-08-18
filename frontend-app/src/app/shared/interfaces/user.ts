export interface InputUser {
  email: string;
  password: string;
}

export interface FormSubmitUser extends InputUser {
  role: string;
  nextPayment: Date | string;
}

export interface User extends FormSubmitUser {
  id: string;
  dateAdded: string;
}
