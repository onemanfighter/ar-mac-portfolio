import { MenuList } from '@chakra-ui/react';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const MenuListComponent = ({
  children,
  orientation = 'vertical',
}: {
  children: any;
  orientation?: 'vertical' | 'horizontal';
}) => {
  const { menuColor } = settingsStore(useShallow(darkModeColorSelector));
  return (
    <MenuList
      p={2}
      borderColor={'gray'}
      bg={menuColor}
      filter={{
        backdropFilter: 'blur(5px)',
      }}
      aria-orientation={orientation}
    >
      {children}
    </MenuList>
  );
};

export default MenuListComponent;
