import { BrightnessIcon, DarkModeIcon, MonitorIcon } from '@assets';
import {
  Box,
  HStack,
  IconButton,
  Menu,
  MenuDivider,
  Radio,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import {
  MenuItemComponent,
  MenuListComponent,
  TopBarButton,
} from '@components';
import { useTranslation } from 'react-i18next';

const ModeStack = () => {
  const { t } = useTranslation();

  const [darkMode, darkModeAction] = useBoolean();
  const [nightShift, nightShiftAction] = useBoolean();
  const [trueTone, trueToneAction] = useBoolean();

  return (
    <HStack
      width={'100%'}
      display={'flex'}
      justifyContent={'space-between'}
      flexDirection={'row'}
      px={2}
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <IconButton
          p={2}
          borderRadius={'full'}
          aria-label="increase"
          width={'1em'}
          _hover={{}}
          transition={'all 0.4s ease-in-out'}
          bg={darkMode ? 'white' : '#0f0f0f8f'}
          onClick={() => {
            darkModeAction.toggle();
          }}
          icon={<DarkModeIcon color={darkMode ? 'black' : 'white'} />}
        />
        <Text color={'white'} fontSize={'10'} fontWeight={'bold'}>
          {t('TopAppBar.monitor.darkMode')}
        </Text>
        <Text color={'gray'} fontSize={'10'} fontWeight={'bold'}>
          {darkMode ? t('TopAppBar.monitor.on') : t('TopAppBar.monitor.off')}
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <IconButton
          p={2}
          borderRadius={'full'}
          aria-label="increase"
          width={'1em'}
          _hover={{}}
          transition={'all 0.4s ease-in-out'}
          bg={nightShift ? 'yellow.500' : '#0f0f0f8f'}
          onClick={() => {
            nightShiftAction.toggle();
          }}
          icon={<DarkModeIcon color="white" />}
        />
        <Text color={'white'} fontSize={'10'} fontWeight={'bold'}>
          {t('TopAppBar.monitor.nightShift')}
        </Text>
        <Text color={'gray'} fontSize={'10'} fontWeight={'bold'}>
          {nightShift ? t('TopAppBar.monitor.on') : t('TopAppBar.monitor.off')}
        </Text>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <IconButton
          p={2}
          borderRadius={'full'}
          aria-label="increase"
          width={'1em'}
          _hover={{}}
          transition={'all 0.4s ease-in-out'}
          bg={trueTone ? 'blue.500' : '#0f0f0f8f'}
          onClick={() => {
            trueToneAction.toggle();
          }}
          icon={<BrightnessIcon color="white" />}
        />
        <Text color={'white'} fontSize={'10'} fontWeight={'bold'}>
          {t('TopAppBar.monitor.trueTone')}
        </Text>
        <Text color={'gray'} fontSize={'10'} fontWeight={'bold'}>
          {trueTone ? t('TopAppBar.monitor.on') : t('TopAppBar.monitor.off')}
        </Text>
      </Box>
    </HStack>
  );
};

const Monitor = () => {
  const { t } = useTranslation();
  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="monitor-top-bar-button"
        icon={<MonitorIcon width="1.5em" height="1.5em" color="white" />}
      />
      <MenuListComponent>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={'column'}
          mx={2}
        >
          <Text color={'white'} fontSize={'xs'} fontWeight={'bold'}>
            {t('TopAppBar.monitor.title')}
          </Text>
          <Slider aria-label="slider-ex-1" defaultValue={30} my={2}>
            <SliderTrack height={4} bg={'gray'} borderRadius={'100'}>
              <SliderFilledTrack
                alignItems={'start'}
                height={4}
                bg={'white'}
                borderRadius={'100'}
                padding={0.5}
              >
                <BrightnessIcon color="black" width={'12'} />
              </SliderFilledTrack>
            </SliderTrack>
            <SliderThumb boxSize={4} shadow={'-1px 1px gray'} />
          </Slider>
        </Box>
        <ModeStack />
        <MenuDivider mx={2} />
        <MenuItemComponent
          text={t('TopAppBar.monitor.monitorSettings')}
          ariaLabel="new-tab"
          onClick={() => {}}
        />
      </MenuListComponent>
    </Menu>
  );
};

export default Monitor;