import { ProgramType } from '@processStore';
import {
  LazyFinderComponent,
  LazyNotesComponent,
  LazyChromeComponent,
  LazyGithubComponent,
  LazySettingsComponent,
  LazySpotifyComponent,
  LazyTerminalComponent,
  LazyVsCodeComponent,
  LazyBinComponent,
  LazyCalendarComponent,
} from '@router';

const WindowAppMap: Record<ProgramType, JSX.Element | undefined> = {
  [ProgramType.FINDER]: <LazyFinderComponent />,
  [ProgramType.NOTES]: <LazyNotesComponent />,
  [ProgramType.CHROME]: <LazyChromeComponent />,
  [ProgramType.GITHUB]: <LazyGithubComponent />,
  [ProgramType.SETTINGS]: <LazySettingsComponent />,
  [ProgramType.SPOTIFY]: <LazySpotifyComponent />,
  [ProgramType.TERMINAL]: <LazyTerminalComponent />,
  [ProgramType.VSCODE]: <LazyVsCodeComponent />,
  [ProgramType.BIN]: <LazyBinComponent />,
  [ProgramType.LAUNCHPAD]: undefined,
  [ProgramType.APP_STORE]: undefined,
  [ProgramType.SAFARI]: undefined,
  [ProgramType.MAILS]: undefined,
  [ProgramType.CONTACTS]: undefined,
  [ProgramType.CALENDAR]: <LazyCalendarComponent />,
  [ProgramType.REMINDERS]: undefined,
  [ProgramType.FACE_TIME]: undefined,
  [ProgramType.MESSAGES]: undefined,
  [ProgramType.MAPS]: undefined,
  [ProgramType.FIND_MY]: undefined,
  [ProgramType.PHOTO_BOOTH]: undefined,
  [ProgramType.PHOTOS]: undefined,
  [ProgramType.PREVIEW]: undefined,
  [ProgramType.MUSIC]: undefined,
  [ProgramType.PODCASTS]: undefined,
  [ProgramType.TV]: undefined,
  [ProgramType.VOICE_MEMOS]: undefined,
  [ProgramType.NEWS]: undefined,
  [ProgramType.STOCKS]: undefined,
  [ProgramType.GARAGE_BAND]: undefined,
  [ProgramType.I_MOVIE]: undefined,
  [ProgramType.HOME]: undefined,
  [ProgramType.CLOCK]: undefined,
  [ProgramType.CALCULATOR]: undefined,
  [ProgramType.FREEFORM]: undefined,
  [ProgramType.BOOKS]: undefined,
  [ProgramType.DICTIONARY]: undefined,
  [ProgramType.WEATHER]: undefined,
  [ProgramType.KEYNOTE]: undefined,
  [ProgramType.NUMBERS]: undefined,
  [ProgramType.PAGES]: undefined,
  [ProgramType.XCODE]: undefined,
};

export default WindowAppMap;