import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../../appStore/appStore';
import { finderSelector } from '../Finder.selector';

describe('Finder selector', () => {
  it('should return default finder state', () => {
    const { result } = renderHook(() => appStore(finderSelector));

    expect(result.current).toEqual({});
  });
});
