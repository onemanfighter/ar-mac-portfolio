export enum ProgramType {
  FINDER = 'finder',
  NOTES = 'notes',
  CHROME = 'chrome',
  VSCODE = 'vscode',
  TERMINAL = 'terminal',
  SPOTIFY = 'spotify',
  GITHUB = 'github',
  SETTINGS = 'settings',
  BIN = 'bin',
}

export type IconButtonProps = {
  id: string;
  index: number;
  isActive: boolean;
  type: ProgramType;
  onClickHandler: (type: ProgramType) => void;
};
