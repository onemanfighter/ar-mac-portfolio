import { AppStoreSlice } from '../../appStore';
import { GithubState, GithubStateSlice } from './types';

const defaultGithubState: GithubState = {
  defaultProfile: 'onemanfighter',
  currentProfile: 'onemanfighter',
};

const createGithubSlice: AppStoreSlice<GithubStateSlice> = (set) => ({
  ...defaultGithubState,
  setCurrentProfile: (profile: string) => {
    set((state) => {
      state.Github.currentProfile = profile;
    });
  },
});

export default createGithubSlice;
