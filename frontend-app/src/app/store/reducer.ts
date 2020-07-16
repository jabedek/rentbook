// made with https://www.telerik.com/blogs/managing-state-using-rxjs-subjects-in-angular-applications

import { Subject } from 'rxjs';
import { ActionTypes } from './actions';
import { IUser, IBook } from '../interfaces';

interface InitialState {
  loggedUser: IUser | null;
  books: IBook[];
}

let state: InitialState = {
  loggedUser: null,
  books: [],
};

interface Event {
  type: string;
  payload?: IUser;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.USER_GET_USER: {
      console.log('GET', state.loggedUser);
      return state.loggedUser;
      break;
    }
    case ActionTypes.USER_LOGIN: {
      state = { ...state, loggedUser: data.payload };
      store.next(state);
      console.log('LOGIN', state);
      break;
    }

    case ActionTypes.USER_LOGOUT: {
      state = { ...state, loggedUser: null };
      store.next(state);
      console.log('LOGIN', state);

      break;
    }

    default:
      break;
  }
});
