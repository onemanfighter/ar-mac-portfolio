import { WifiIcon } from '@assets';
import {
  Box,
  Button,
  Menu,
  MenuDivider,
  Switch,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import {
  MenuItemComponent,
  MenuListComponent,
  TopBarButton,
} from '@components';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import { useTranslation } from 'react-i18next';

const WifiStack = () => {
  const { t } = useTranslation();
  const [wifi1, wifi1Action] = useBoolean();
  const [wifi2, wifi2Action] = useBoolean();
  const { iconColor, textColor } = settingsStore(
    useShallow(darkModeColorSelector),
  );
  return (
    <>
      <Button
        width={'100%'}
        leftIcon={
          <WifiIcon
            width="1.5em"
            height="1.5em"
            color={iconColor}
            style={{
              backgroundColor: wifi1 ? 'blue' : '#f0f0f06f',
              padding: '0.2em',
              borderRadius: '50%',
            }}
          />
        }
        aria-label="wifi-1"
        variant="ghost"
        display={'flex'}
        size={'sm'}
        flexDir={'row'}
        color={textColor}
        _hover={{ bg: '#f0f0f06f' }}
        bg={'transparent'}
        justifyContent={'flex-start'}
        onClick={() => {
          wifi1Action.toggle();
        }}
      >
        {t('TopAppBar.wifi.wifi1')}
      </Button>
      <Button
        width={'100%'}
        leftIcon={
          <WifiIcon
            width="1.5em"
            height="1.5em"
            color={iconColor}
            style={{
              backgroundColor: wifi2 ? 'blue' : '#f0f0f06f',
              padding: '0.2em',
              borderRadius: '50%',
            }}
          />
        }
        aria-label="wifi-2"
        variant="ghost"
        display={'flex'}
        color={textColor}
        size={'sm'}
        _hover={{ bg: '#f0f0f06f' }}
        bg={'transparent'}
        flexDir={'row'}
        justifyContent={'flex-start'}
        onClick={() => {
          wifi2Action.toggle();
        }}
      >
        {t('TopAppBar.wifi.wifi2')}
      </Button>
    </>
  );
};

const Wifi = () => {
  const { t } = useTranslation();
  const { iconColor, textColor } = settingsStore(
    useShallow(darkModeColorSelector),
  );
  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="wifi-top-bar-button"
        icon={<WifiIcon width="1.5em" height="1.5em" color={iconColor} />}
      />
      <MenuListComponent>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          width={'100%'}
          flexDirection={'row'}
          px={3}
          color={textColor}
          my={2}
        >
          <Text fontSize={14} fontWeight={600}>
            {t('TopAppBar.wifi.title')}
          </Text>
          <Switch size="sm" colorScheme="blue" />
        </Box>
        <MenuItemComponent
          text={t('TopAppBar.wifi.weakSecurity')}
          ariaLabel="wifi-weak-security"
          onClick={() => {}}
        />
        <MenuDivider p={0} m={0.5} />
        <WifiStack />
        <MenuDivider p={0} m={0.5} />
        <MenuItemComponent
          text={t('TopAppBar.wifi.otherNetwork')}
          ariaLabel="other-network"
          onClick={() => {}}
          command=">"
        />
        <MenuDivider p={0} m={0.5} />
        <MenuItemComponent
          text={t('TopAppBar.wifi.wifiSettings')}
          ariaLabel="wifi-settings"
          onClick={() => {}}
        />
      </MenuListComponent>
    </Menu>
  );
};

export default Wifi;
