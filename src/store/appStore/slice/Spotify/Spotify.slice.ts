import { AppStoreSlice } from '../../appStore';
import { SpotifyState, SpotifyStateSlice } from './types';

const defaultSpotifyState: SpotifyState = {};

const createSpotifySlice: AppStoreSlice<SpotifyStateSlice> = (set) => ({
  ...defaultSpotifyState,
});

export default createSpotifySlice;
