import { AppStoreState } from '../../appStore';

const githubSelector = (state: AppStoreState) => ({
  currentProfile: state.Github.currentProfile,
  defaultProfile: state.Github.defaultProfile,
  getCurrentProject: () => {
    return `https://${state.Github.currentProfile}.github.io/${state.Github.project}`;
  },
  setCurrentProfile: state.Github.setCurrentProfile,
  resetCurrentProfile: state.Github.resetCurrentProfile,
  setProject: state.Github.setProject,
});

export { githubSelector };
