import { Box, Image, Menu, MenuDivider, Text } from '@chakra-ui/react';
import {
  MenuItemComponent,
  MenuListComponent,
  TopBarButton,
} from '@components';
import { useTranslation } from 'react-i18next';

const User = () => {
  const { t } = useTranslation();
  return (
    <Menu>
      <TopBarButton
        text="Amit Raikwar"
        onClick={() => {}}
        ariaLabel="search-top-bar-button"
      />
      <MenuListComponent>
        <Box
          display={'flex'}
          width={'100%'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
          py={2}
        >
          <Image
            borderRadius="full"
            src="https://avatars.githubusercontent.com/u/104697219?s=400&u=7ecc539c268755cfe0409ca5863773bb726387ba&v=4"
            alt="Profile"
            width="48px"
            loading="lazy"
            border={'2px solid white'}
          />
          <Text color={'white'} fontSize={11} fontWeight={600}>
            {t('LockScreen.userName')}
          </Text>
        </Box>
        <MenuDivider p={0} m={0.5} />
        <MenuItemComponent
          text={t('TopAppBar.user.loginWindow')}
          ariaLabel="new-tab"
          onClick={() => {}}
        />
        <MenuDivider p={0} m={0.5} />
        <MenuItemComponent
          text={t('TopAppBar.user.setting')}
          ariaLabel="new-tab"
          onClick={() => {}}
        />
      </MenuListComponent>
    </Menu>
  );
};

export default User;
