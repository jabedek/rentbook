import { User } from './user';
import { LanguageCode } from './../types/language-code';

export interface LanguageState {
  lang: LanguageCode;
}

export interface AuthState {
  auth: User | null;
}

export interface AppState {
  language: LanguageState;
  auth: AuthState;
}
