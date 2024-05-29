export type MenuItemComponentProps = {
  text: string;
  command?: string;
  icon?: React.ReactElement;
  ariaLabel: string;
  onClick: () => void;
};
