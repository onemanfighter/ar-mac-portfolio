export type MenuItemComponentProps = {
  text: string;
  command?: string;
  icon?: React.ReactElement;
  ariaLabel: string;
  side?: 'left' | 'right';
  onClick: () => void;
};
