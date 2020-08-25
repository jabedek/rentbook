import { AuthState } from './../../../shared/interfaces/app-state';
import { AUTH_ACTION } from '../actions/auth.actions';

export const initialState: AuthState = {
  auth: null,
};

export function reducer(state = initialState, action: AUTH_ACTION): AuthState {
  switch (action.type) {
    case '[LOGIN] SET AUTH':
      return { auth: action.payload };
    case '[HEADER] CLEAR AUTH':
      return { auth: null };
    default:
      return state;
  }
}
