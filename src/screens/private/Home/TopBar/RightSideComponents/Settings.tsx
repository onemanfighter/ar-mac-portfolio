import { Box, HStack, Menu, VStack } from '@chakra-ui/react';
import { SettingsIcon } from '@assets';
import { MenuListComponent, TopBarButton } from '@components';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const Settings = () => {
  const { iconColor } = settingsStore(useShallow(darkModeColorSelector));

  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="settings-top-bar-button"
        icon={<SettingsIcon width="1.5em" height="1.5em" color={iconColor} />}
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
