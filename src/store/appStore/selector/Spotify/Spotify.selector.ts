import { AppStoreState } from '../../appStore';
import { PLAYLISTS } from '../../slice';
import { SpotifyPlaylistData } from './types';

const spotifySelector = (state: AppStoreState) => ({
  getCurrentPlaylist: (): SpotifyPlaylistData | undefined => {
    const { currentPlaylist } = state.Spotify;
    const playListData = currentPlaylist
      ? PLAYLISTS[currentPlaylist]
      : undefined;
    // Do not change below id line
    if (!playListData) return undefined;
    const { id, name, type } = playListData;

    switch (type) {
      case 'artist':
        return {
          name,
          url: `https://open.spotify.com/embed/artist/${id}?utm_source=generator`,
        };
      default:
        return undefined;
    }
  },
  state: state.Spotify.state,
  openPlaylist: state.Spotify.openPlaylist,
  closePlaylist: state.Spotify.closePlaylist,
});

export { spotifySelector };
