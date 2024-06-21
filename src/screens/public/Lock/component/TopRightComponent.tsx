import { BatteryIcon, CheckIcon, KeyboardIcon, WifiIcon } from '@assets';
import {
  Box,
  Button,
  Divider,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const TopRightComponent = () => {
  const { t } = useTranslation();

  return (
    <Box
      width={'100%'}
      alignItems={'center'}
      position={'fixed'}
      top={'0'}
      right={'0'}
      display={'flex'}
      justifyContent={'flex-end'}
      marginEnd={'10'}
      zIndex={0}
      aria-label="top-right-component"
      gap={2}
    >
      <Popover>
        <PopoverTrigger>
          <Button
            rightIcon={
              <KeyboardIcon color="white" aria-label="keyboard-icon" />
            }
            size={'xs'}
            variant="none"
            color={'white'}
            aria-label="keyboard-icon-button"
          >
            {t('LockScreen.keyboard.type')}
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent width={'auto'} bg="#0000007f">
            <PopoverBody gap={1}>
              <Button
                size="xs"
                width="100%"
                color="white"
                bg="transparent"
                _hover={{ color: 'black', bg: 'white' }}
                rightIcon={<CheckIcon />}
              >
                {t('LockScreen.keyboard.option.india')}
              </Button>
              <Divider my={1} />
              <Button size={'xs'} variant="none" color={'white'} disabled>
                {t('LockScreen.keyboard.menu.others')}
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <BatteryIcon
        percentage={67}
        props={{
          color: 'white',
          'aria-label': 'battery-icon',
          width: 16,
          height: 16,
        }}
      />
      <WifiIcon color="white" aria-label="wifi-icon" />
    </Box>
  );
};

export default TopRightComponent;
