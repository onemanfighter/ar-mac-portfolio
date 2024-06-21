import { BottomBarProgramType } from './types';
import Finder from '../../../../../assets/logo/finder.png';
import Chrome from '../../../../../assets/logo/chrome.png';
import VsCode from '../../../../../assets/logo/vscode.png';
import Terminal from '../../../../../assets/logo/terminal.png';
import Spotify from '../../../../../assets/logo/spotify.png';
import Github from '../../../../../assets/logo/github.png';
import Settings from '../../../../../assets/logo/settings.png';
import Notes from '../../../../../assets/logo/notes.png';
import Launchpad from '../../../../../assets/logo/launchpad.png';

export const PROGRAMS: Record<
  BottomBarProgramType,
  { name: string; icon: string }
> = {
  [BottomBarProgramType.LAUNCHPAD]: {
    name: 'Launchpad',
    icon: Launchpad,
  },
  [BottomBarProgramType.FINDER]: {
    name: 'Finder',
    icon: Finder,
  },
  [BottomBarProgramType.NOTES]: {
    name: 'Notes',
    icon: Notes,
  },
  [BottomBarProgramType.CHROME]: {
    name: 'Chrome',
    icon: Chrome,
  },
  [BottomBarProgramType.VSCODE]: {
    name: 'VsCode',
    icon: VsCode,
  },
  [BottomBarProgramType.TERMINAL]: {
    name: 'Terminal',
    icon: Terminal,
  },
  [BottomBarProgramType.SPOTIFY]: {
    name: 'Spotify',
    icon: Spotify,
  },
  [BottomBarProgramType.GITHUB]: {
    name: 'Github',
    icon: Github,
  },
  [BottomBarProgramType.SETTINGS]: {
    name: 'Settings',
    icon: Settings,
  },
};

export default PROGRAMS;
