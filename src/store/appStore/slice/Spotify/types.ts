export type SpotifyItemData = {
  type: 'artist';
  name: string;
  id: string;
};

export type SpotifyState = {
  state: 'playing' | 'main';
  currentPlaylist: IndianArtist | undefined;
};

export interface SpotifyAppAction {
  /**
   * Open playlist.
   */
  openPlaylist: (playlist: IndianArtist) => void;

  /**
   * Close playlist.
   */
  closePlaylist: () => void;
}

export type SpotifyStateSlice = SpotifyState & SpotifyAppAction;

export enum IndianArtist {
  ARIJIT_SINGH = 'Arijit Singh',
  ATIF_ASLAM = 'Atif Aslam',
  PRITAM = 'Pritam',
  AR_RAHMAN = 'A.R. Rahman',
  SONU_NIGAM = 'Sonu Nigam',
  SHAAN = 'Shaan',
  SHREYA_GHOSHAL = 'Shreya Ghoshal',
  SUNIDHI_CHAUHAN = 'Sunidhi Chauhan',
  KK = 'KK',
  MOHIT_CHAUHAN = 'Mohit Chauhan',
  NEHA_KAKKAR = 'Neha Kakkar',
  TONY_KAKKAR = 'Tony Kakkar',
  BADSHAH = 'Badshah',
  HONEY_SINGH = 'Yo Yo Honey Singh',
  DILJIT_DOSANJH = 'Diljit Dosanjh',
  DARSHAN_RAVAL = 'Darshan Raval',
  SHANKAR_MAHADEVAN = 'Shankar Mahadevan',
  UDIT_NARAYAN = 'Udit Narayan',
}
