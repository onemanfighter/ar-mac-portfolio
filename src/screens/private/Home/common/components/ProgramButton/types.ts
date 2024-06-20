import { ProgramType } from '@processStore';

export type ProgramButtonProps = {
  name: string;
  icon: string;
  isActive: boolean;
  variant?: 'default' | 'bottomBar';
  onClickHandler: () => void;
  size?: number;
};
