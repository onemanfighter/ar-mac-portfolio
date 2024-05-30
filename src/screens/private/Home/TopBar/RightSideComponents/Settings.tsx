import { SettingsIcon, WifiIcon } from '@assets';
import {
  Box,
  HStack,
  Image,
  Menu,
  MenuDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  MenuItemComponent,
  MenuListComponent,
  TopBarButton,
} from '@components';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t } = useTranslation();
  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="wifi-top-bar-button"
        icon={<SettingsIcon width="1.5em" height="1.5em" color="white" />}
      />
      <MenuListComponent>
        <Box display={'flex'}>
          <Box
            display={'flex'}
            width={'100%'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            py={2}
          >
            <HStack>
              <VStack></VStack>
            </HStack>
          </Box>
        </Box>
      </MenuListComponent>
    </Menu>
  );
};

export default Settings;
