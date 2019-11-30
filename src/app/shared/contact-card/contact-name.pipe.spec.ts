import { ContactNamePipe } from './contact-name.pipe';
import { Contact } from './contact-card.component';

describe('ContactNamePipe', () => {
  let pipe: ContactNamePipe;

  beforeEach(() => {
    pipe = new ContactNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns empty string for missing values', () => {
    expect(pipe.transform(null as Contact)).toBe('');
    expect(pipe.transform(undefined as Contact)).toBe('');
    expect(pipe.transform({} as Contact)).toBe('');
  });

  it('can handle only the first name', () => {
    expect(pipe.transform({ firstName: 'Albert' } as Contact)).toBe('Albert');
  });

  it('handles first and last name', () => {
    expect(pipe.transform({ firstName: 'Albert', lastName: 'Adams' })).toBe(
      'Albert Adams'
    );
  });

  it('handles first, last, and company', () => {
    expect(
      pipe.transform({
        firstName: 'Albert',
        lastName: 'Adams',
        company: 'ACME'
      })
    ).toBe('Albert Adams (ACME)');
  });
});
