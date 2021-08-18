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

// prettier-ignore
export const EMAIL_REGEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+(\.[a-z]+)?$';
