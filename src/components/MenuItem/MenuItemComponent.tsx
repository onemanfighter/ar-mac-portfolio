import { MenuItem } from '@chakra-ui/react';
import { MenuItemComponentProps } from './types';

const MenuItemComponent = ({
  text,
  command,
  icon,
  onClick,
  side = 'right',
  ariaLabel,
}: MenuItemComponentProps) => {
  return (
    <MenuItem
      borderRadius={2}
      icon={icon}
      py={0.2}
      color={'white'}
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
