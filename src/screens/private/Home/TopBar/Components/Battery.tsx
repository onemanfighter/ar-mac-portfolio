import { BatteryIcon, MacIcon, SearchIcon } from '@assets';
import {
  Box,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import {
  MenuItemComponent,
  MenuListComponent,
  TopBarButton,
} from '@components';
import { useTranslation } from 'react-i18next';

const Battery = () => {
  const batteryPercentage = 67;
  const { t } = useTranslation();
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
              color: 'white',
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
        >
          <Text color={'white'} fontSize={'xs'} fontWeight={'bold'}>
            {t('TopAppBar.battery.title')}
          </Text>
          <Text color={'white'} fontSize={'xs'}>
            {batteryPercentage + '%'}
          </Text>
        </Box>
        <MenuDivider mx={2} />
        <MenuItemComponent
          text={t('TopAppBar.battery.batterySettings')}
          ariaLabel="new-tab"
          onClick={() => {}}
        />
      </MenuListComponent>
    </Menu>
  );
};

export default Battery;
