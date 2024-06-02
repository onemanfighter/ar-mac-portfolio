import { AppStoreSlice } from '../../appStore';
import { IndianArtist, SpotifyState, SpotifyStateSlice } from './types';

const defaultSpotifyState: SpotifyState = {
  state: 'playing',
  currentPlaylist: IndianArtist.AR_RAHMAN,
};

const createSpotifySlice: AppStoreSlice<SpotifyStateSlice> = (set) => ({
  ...defaultSpotifyState,
  openPlaylist(playlist) {
    set((state) => {
      state.Spotify.state = 'playing';
      state.Spotify.currentPlaylist = playlist;
    });
  },
  closePlaylist() {
    set((state) => {
      state.Spotify.state = 'main';
      state.Spotify.currentPlaylist = undefined;
    });
  },
});

export default createSpotifySlice;
