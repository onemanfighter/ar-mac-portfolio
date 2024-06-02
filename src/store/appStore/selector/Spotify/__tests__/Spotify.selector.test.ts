import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { spotifySelector } from '../Spotify.selector';

describe('Spotify selector', () => {
  it('should return default spotify state', () => {
    const { result } = renderHook(() => appStore(spotifySelector));

    expect(result.current).toMatchSnapshot();
  });
});
