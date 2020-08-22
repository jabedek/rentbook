import { LanguageCode } from '../types/language-code';
import { IUser } from './user';

export interface InitState {
  readonly auth: IUser | null;
  readonly lang: LanguageCode;
}
