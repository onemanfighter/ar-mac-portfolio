import { ProgramType } from './types';
import Finder from '../../../../../assets/logo/finder.png';
import Chrome from '../../../../../assets/logo/chrome.png';
import VsCode from '../../../../../assets/logo/vscode.png';
import Terminal from '../../../../../assets/logo/terminal.png';
import Spotify from '../../../../../assets/logo/spotify.png';
import Github from '../../../../../assets/logo/github.png';
import Settings from '../../../../../assets/logo/settings.png';

export const PROGRAMS: Record<ProgramType, { name: string; icon: string }> = {
  [ProgramType.FINDER]: {
    name: 'Finder',
    icon: Finder,
  },
  [ProgramType.CHROME]: {
    name: 'Chrome',
    icon: Chrome,
  },
  [ProgramType.VSCODE]: {
    name: 'VsCode',
    icon: VsCode,
  },
  [ProgramType.TERMINAL]: {
    name: 'Terminal',
    icon: Terminal,
  },
  [ProgramType.SPOTIFY]: {
    name: 'Spotify',
    icon: Spotify,
  },
  [ProgramType.GITHUB]: {
    name: 'Github',
    icon: Github,
  },
  [ProgramType.SETTINGS]: {
    name: 'Settings',
    icon: Settings,
  },
};

export default PROGRAMS;