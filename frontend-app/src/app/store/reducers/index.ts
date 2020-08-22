import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromLanguage from './language.reducer';

export interface AppState {
  language: fromLanguage.LanguageState;
}

export const reducers: ActionReducerMap<AppState> = {
  language: fromLanguage.reducer,
};
