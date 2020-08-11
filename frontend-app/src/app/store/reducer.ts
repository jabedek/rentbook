import { IStore } from './../interfaces/IStore';
// made with https://www.telerik.com/blogs/managing-state-using-rxjs-subjects-in-angular-applications

import { Subject } from 'rxjs';
import { UserActionTypes } from './actions';
import { IUser } from '../interfaces/user';
import { IBook } from '../interfaces/IBook';

let state: IStore = {
  loggedUser: null,
  language: 'PL',
};

interface Event {
  type: string;
  payload?: IUser;
}

export const store = new Subject<IStore>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case UserActionTypes.USER_GET_USER: {
      return state.loggedUser;
    }
    case UserActionTypes.USER_LOGIN: {
      state = { ...state, loggedUser: data.payload };
      store.next(state);
      break;
    }

    case UserActionTypes.USER_LOGOUT: {
      state = { ...state, loggedUser: null };
      store.next(state);
      break;
    }

    default:
      break;
  }
});
