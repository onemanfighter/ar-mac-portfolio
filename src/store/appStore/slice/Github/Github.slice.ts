import { AppStoreSlice } from '../../appStore';
import { GithubState, GithubStateSlice } from './types';

const defaultGithubState: GithubState = {};

const createGithubSlice: AppStoreSlice<GithubStateSlice> = (set) => ({
  ...defaultGithubState,
});

export default createGithubSlice;
