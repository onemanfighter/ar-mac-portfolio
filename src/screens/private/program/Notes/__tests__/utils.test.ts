import { getAllStringExceptFirstLine, getFirstLineFromString } from '../utils';

describe('utils', () => {
  it('should return all string except first line', () => {
    const str =
      'This is a first line\nThis is a second line\nThis is a third line';
    const result = getAllStringExceptFirstLine(str);

    expect(result).toBe('This is a second line\nThis is a third line');
  });

  it('should return first line from string', () => {
    const str =
      'This is a first line\nThis is a second line\nThis is a third line';
    const result = getFirstLineFromString(str);

    expect(result).toBe('This is a first line');
  });
});
