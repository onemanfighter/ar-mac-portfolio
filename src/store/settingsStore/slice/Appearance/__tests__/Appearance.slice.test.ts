import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';

describe('Appearance slice', () => {
  it('should return default appearance state', () => {
    const { result } = renderHook(() => settingsStore());

    expect(result.current.Appearance).toEqual({});
  });
});
