import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Github slice', () => {
  it('should return default github state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Github).toMatchSnapshot();
  });
});
