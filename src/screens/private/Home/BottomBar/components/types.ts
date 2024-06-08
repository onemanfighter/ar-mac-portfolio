export enum ProgramType {
  FINDER = 'finder',
  CHROME = 'chrome',
  VSCODE = 'vscode',
  TERMINAL = 'terminal',
  SPOTIFY = 'spotify',
  GITHUB = 'github',
  SETTINGS = 'settings',
}

export type IconButtonProps = {
  id: string;
  index: number;
  isActive: boolean;
  type: ProgramType;
};