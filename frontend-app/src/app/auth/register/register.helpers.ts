import { InputUser, FormSubmitUser } from './../../shared/interfaces/user';

export function extendUserDetails(formValue: InputUser): FormSubmitUser {
  let date = new Date().toJSON().split('T')[0];

  const user: FormSubmitUser = {
    ...formValue,
    role: 'USER',
    nextPayment: date,
  };

  return user;
}
