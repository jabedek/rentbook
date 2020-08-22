import { Language$Pipe } from './language$.pipe';

describe('Language$Pipe', () => {
  it('create an instance', () => {
    const pipe = new Language$Pipe();
    expect(pipe).toBeTruthy();
  });
});
