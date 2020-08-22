import { InitState } from './../interfaces/store';
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const INITIAL_USER_TEST = {
  id: '',
  email: 'a@a',
  password: '',
  dateAdded: '',
  nextPayment: null,
  role: '',
};

export const INITIAL_APP_STATE: InitState = {
  auth: null,
  lang: 'EN',
};
