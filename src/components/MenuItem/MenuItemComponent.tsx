import { MenuItem } from '@chakra-ui/react';
import { MenuItemComponentProps } from './types';

const MenuItemComponent = ({
  text,
  command,
  icon,
  onClick,
  ariaLabel,
}: MenuItemComponentProps) => {
  return (
    <MenuItem
      borderRadius={2}
      icon={icon}
      color={'white'}
      fontSize={'xs'}
      py={1}
      onClick={onClick}
      aria-label={ariaLabel}
      command={command}
      _hover={{ bg: '#f0f0f06f' }}
      bg={'transparent'}
    >
      {text}
    </MenuItem>
  );
};

export default MenuItemComponent;
