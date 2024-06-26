import { renderHook } from '@testing-library/react-hooks';
import { settingsStore } from '../../../settingsStore';
import { appearanceSelector } from '../Appearance.selector';

describe('Appearance selector', () => {
  it('should return default appearance state', () => {
    const { result } = renderHook(() => settingsStore(appearanceSelector));

    expect(result.current).toEqual({});
  });
});
