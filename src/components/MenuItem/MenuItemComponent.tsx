import { MenuItem } from '@chakra-ui/react';
import { MenuItemComponentProps } from './types';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const MenuItemComponent = ({
  text,
  command,
  icon,
  onClick,
  side = 'right',
  ariaLabel,
}: MenuItemComponentProps) => {
  const { textColor } = settingsStore(useShallow(darkModeColorSelector));

  return (
    <MenuItem
      borderRadius={2}
      icon={icon}
      py={0.2}
      color={textColor}
      fontSize={'xs'}
      fontWeight={600}
      onClick={onClick}
      aria-label={ariaLabel}
      command={command}
      _hover={{ bg: side === 'right' ? '#f0f0f06f' : 'blue.500' }}
      bg={'transparent'}
    >
      {text}
    </MenuItem>
  );
};

export default MenuItemComponent;
