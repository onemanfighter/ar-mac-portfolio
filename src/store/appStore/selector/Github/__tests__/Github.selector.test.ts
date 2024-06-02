import { renderHook } from '@testing-library/react-hooks';
import { appStore, githubSelector } from '@appStore';

describe('Github selector', () => {
  it('should return default github state', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    expect(result.current).toMatchSnapshot();
  });
});
