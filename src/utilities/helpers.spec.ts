import { formatDate, formUrl } from '.';

describe('Helpers', () => {
  test('should format if correct date is provided', () => {
    expect(formatDate('1999-01-01')).toEqual('01 Jan, 1999');
  });

  test('should return empty string if incorrect date is provided', () => {
    expect(formatDate('invalid')).toEqual('');
  });

  test('should form url from given string', () => {
    expect(formUrl('google.com')).toBe('https://google.com/');
  });
});
