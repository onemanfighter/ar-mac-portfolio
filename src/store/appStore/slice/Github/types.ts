export type GithubState = {
  defaultProfile: string;
  currentProfile: string;
};

export interface GithubAppAction {
  setCurrentProfile: (profile: string) => void;
}

export type GithubStateSlice = GithubState & GithubAppAction;
