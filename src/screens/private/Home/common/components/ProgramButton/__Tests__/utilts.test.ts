import { getIconSize } from '../utils';

describe('Utils', () => {
  it('getIconSize should return min size if zero size percentage is provided', () => {
    const size = 0;
    const result = getIconSize(size);
    expect(result).toBe(4);
  });

  it('getIconSize should return max size if 100 size percentage is provided', () => {
    const size = 100;
    const result = getIconSize(size);
    expect(result).toBe(16);
  });

  it('getIconSize should return 10 if 50 size percentage is provided', () => {
    const size = 50;
    const result = getIconSize(size);
    expect(result).toBe(10);
  });

  it('getIconSize should return 7 if 30 size percentage is provided', () => {
    const size = 30;
    const result = getIconSize(size);
    expect(result).toBe(7.6);
  });
});
