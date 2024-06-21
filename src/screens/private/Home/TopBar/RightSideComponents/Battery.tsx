import { BatteryIcon } from '@assets';
import { Box, Menu, MenuDivider, Text } from '@chakra-ui/react';
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

const Battery = () => {
  const batteryPercentage = 67;
  const { t } = useTranslation();
  const { iconColor, textColor } = settingsStore(
    useShallow(darkModeColorSelector),
  );

  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="battery-top-bar-button"
        icon={
          <BatteryIcon
            percentage={batteryPercentage}
            props={{
              width: '2em',
              height: '2em',
              color: iconColor,
            }}
          />
        }
      />
      <MenuListComponent>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={'row'}
          mx={2}
          color={textColor}
        >
          <Text fontSize={'xs'} fontWeight={'bold'}>
            {t('TopAppBar.battery.title')}
          </Text>
          <Text fontSize={'xs'}>{batteryPercentage + '%'}</Text>
        </Box>
        <MenuDivider mx={2} />
        <MenuItemComponent
          text={t('TopAppBar.battery.batterySettings')}
          ariaLabel="battery-settings"
          onClick={() => {}}
        />
      </MenuListComponent>
    </Menu>
  );
};

export default Battery;
