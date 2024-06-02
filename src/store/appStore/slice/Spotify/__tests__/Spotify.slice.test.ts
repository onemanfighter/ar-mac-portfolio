import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Spotify slice', () => {
  it('should return default spotify state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Spotify).toMatchSnapshot();
  });
});
