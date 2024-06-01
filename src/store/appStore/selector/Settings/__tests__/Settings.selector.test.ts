import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { settingsSelector } from '../Settings.selector';

describe('Settings selector', () => {
  it('should return default settings state', () => {
    const { result } = renderHook(() => appStore(settingsSelector));

    expect(result.current).toEqual({});
  });
});
