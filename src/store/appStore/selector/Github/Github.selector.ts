import { AppStoreState } from '../../appStore';

const githubSelector = (state: AppStoreState) => ({
  currentProfile: state.Github.currentProfile,
  defaultProfile: state.Github.defaultProfile,
});

export { githubSelector };
