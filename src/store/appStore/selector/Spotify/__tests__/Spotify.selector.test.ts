import { act, renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { spotifySelector } from '../Spotify.selector';
import { IndianArtist } from '@appStore';

describe('Spotify selector', () => {
  it('should return default spotify state', () => {
    const { result } = renderHook(() => appStore(spotifySelector));

    expect(result.current.state).toMatchSnapshot();
  });

  it('should return current playlist data', () => {
    const { result } = renderHook(() => appStore(spotifySelector));

    expect(result.current.getCurrentPlaylist()).toMatchSnapshot();
  });

  it('should return open playlist', () => {
    const { result } = renderHook(() => appStore(spotifySelector));

    act(() => {
      result.current.openPlaylist(IndianArtist.ARIJIT_SINGH);
    });

    expect(result.current.getCurrentPlaylist).toMatchSnapshot();
  });

  it('should return close playlist', () => {
    const { result } = renderHook(() => appStore(spotifySelector));

    act(() => {
      result.current.closePlaylist();
    });

    expect(result.current.state).toMatchSnapshot();
  });

  it('should return undefined playlist data', () => {
    const { result } = renderHook(() => appStore(spotifySelector));

    act(() => {
      result.current.openPlaylist('' as IndianArtist);
    });

    expect(result.current.getCurrentPlaylist()).toBeUndefined();
  });
});
