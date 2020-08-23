import { AppState } from '../../interfaces/app-state';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromLanguage from './language.reducer';
import * as fromAuth from './auth.reducer';

export const reducers: ActionReducerMap<AppState> = {
  language: fromLanguage.reducer,
  auth: fromAuth.reducer,
};
