import { ProgramType } from '@processStore';
import { ProgramData } from './types';
import AppStore from '../../../../assets/logo/appstore.png';
import Safari from '../../../../assets/logo/safari.png';

export const LaunchpadProgramsList: ProgramData[] = [
  {
    name: 'App Store',
    icon: AppStore,
    programType: ProgramType.APP_STORE,
  },
  {
    name: 'Safari',
    icon: Safari,
    programType: ProgramType.SAFARI,
  },
];
