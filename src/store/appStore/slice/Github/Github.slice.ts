import { AppStoreSlice } from '../../appStore';
import { GithubState, GithubStateSlice } from './types';

const defaultGithubState: GithubState = {
  defaultProfile: 'onemanfighter',
  currentProfile: 'onemanfighter',
  project: 'onemanfighter',
};

const createGithubSlice: AppStoreSlice<GithubStateSlice> = (set) => ({
  ...defaultGithubState,
  setCurrentProfile: (profile: string) => {
    set((state) => {
      state.Github.currentProfile = profile;
      state.Github.project = profile;
    });
  },
  setProject: (project: GithubState['project']) => {
    set((state) => {
      state.Github.project = project;
    });
  },
  resetCurrentProfile: () => {
    set((state) => {
      state.Github.currentProfile = state.Github.defaultProfile;
    });
  },
});

export default createGithubSlice;
