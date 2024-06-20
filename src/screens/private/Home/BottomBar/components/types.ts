export enum BottomBarProgramType {
  FINDER = 'finder',
  NOTES = 'notes',
  CHROME = 'chrome',
  VSCODE = 'vscode',
  TERMINAL = 'terminal',
  SPOTIFY = 'spotify',
  GITHUB = 'github',
  SETTINGS = 'settings',
  // Add new app here
  LAUNCHPAD = 'launchPad',
}

export type IconButtonProps = {
  id: string;
  index: number;
  isActive: boolean;
  type: BottomBarProgramType;
  onClickHandler: (type: BottomBarProgramType) => void;
};
