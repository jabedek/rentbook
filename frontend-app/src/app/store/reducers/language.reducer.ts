import { LanguageCode } from '../../types/language-code';
import { Action } from '@ngrx/store';

export interface LanguageState {
  auth: number;
  lang: LanguageCode;
}

export const initialState: LanguageState = {
  auth: 1,
  lang: 'EN',
};

export function reducer(state = initialState, action: Action): LanguageState {
  switch (action.type) {
    case 'PL':
      // const auth = state.auth + 1;
      // let lang = '';

      return { ...state, lang: 'PL' };

    case 'EN':
      return { ...state, lang: 'EN' };

    // if (auth % 3 === 0) {
    //   lang += 'Fizz';
    // }
    // if (auth % 5 === 0) {
    //   lang += 'Buzz';
    // }

    // return {
    //   auth,
    //   lang: lang || auth.toString(),
    // };

    default:
      return state;
  }
}
