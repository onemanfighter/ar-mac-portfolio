import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { githubSelector } from '../Github.selector';

describe('Github selector', () => {
  it('should return default github state', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    expect(result.current).toEqual({});
  });
});
