import { MenuList } from '@chakra-ui/react';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const MenuListComponent = ({ children }: { children: any }) => {
  const { menuColor } = settingsStore(useShallow(darkModeColorSelector));
  return (
    <MenuList
      p={2}
      borderColor={'gray'}
      bg={menuColor}
      filter={{
        backdropFilter: 'blur(5px)',
      }}
    >
      {children}
    </MenuList>
  );
};

export default MenuListComponent;
