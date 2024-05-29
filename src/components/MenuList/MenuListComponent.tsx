import { MenuList } from '@chakra-ui/react';

const MenuListComponent = ({ children }: { children: any }) => {
  return (
    <MenuList p={2} borderColor={'gray'} bg={'#0f0f0f8f'}>
      {children}
    </MenuList>
  );
};

export default MenuListComponent;
