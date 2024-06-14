import { ProgramType } from '@processStore';

export type ProgramButtonProps = {
  name: string;
  icon: string;
  isActive: boolean;
  onClickHandler: () => void;
};
