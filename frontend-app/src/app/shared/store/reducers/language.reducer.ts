import { LanguageState } from './../../../shared/interfaces/app-state';

export const initialState: LanguageState = {
  lang: 'EN',
};

export function reducer(state = initialState, action): LanguageState {
  switch (action.type) {
    case '[LANG SETUP] SET LANG':
      return { lang: action.payload };

    default:
      return state;
  }
}
