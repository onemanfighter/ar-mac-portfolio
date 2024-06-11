export type GithubState = {
  defaultProfile: string;
  currentProfile: string;
  project: string;
};

export interface GithubAppAction {
  /**
   * Set the current profile.
   * @param profile - The profile to set
   * @returns void
   */
  setCurrentProfile: (profile: string) => void;
  /**
   * Set the current project.
   * @param profile - The profile to set
   * @returns void
   */
  setProject: (project: GithubState['project']) => void;
  /**
   * Reset the current profile to the default profile
   * @returns void
   */
  resetCurrentProfile: () => void;
}

export type GithubStateSlice = GithubState & GithubAppAction;
