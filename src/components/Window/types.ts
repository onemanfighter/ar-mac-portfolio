import { ProgramType } from '@processStore';

export type WindowProps = {
  app: ProgramType;
  children: React.ReactNode;
  topBar?: React.ReactNode;
};
