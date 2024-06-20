import { ProgramType } from '@processStore';

export type LaunchpadProps = {};

export type ProgramData = {
  name: string;
  icon: string;
  programType: ProgramType;
};

export type ProgramDataRecord = Record<ProgramType, ProgramData>;
