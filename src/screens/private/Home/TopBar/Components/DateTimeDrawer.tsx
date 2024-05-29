import {
  Box,
  Drawer,
  DrawerContent,
  Menu,
  useDisclosure,
} from '@chakra-ui/react';
import { TopBarButton } from '@components';
import { uiStore } from '@uiStore';
import { dateTimeSelector } from '@uiStore/selector';

const DateTimeDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { timeInAmPm, dateWithoutYear } = uiStore(dateTimeSelector);

  return (
    <>
      <Menu>
        <TopBarButton
          text={`${dateWithoutYear} ${timeInAmPm()}`}
          ariaLabel="date-time-top-bar-button"
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerContent bg={'transparent'} marginTop={7}>
            <Box
              boxSize={'100%'}
              bg={'#000000af'}
              position={'fixed'}
              top={0}
              left={0}
              zIndex={100}
            />
          </DrawerContent>
        </Drawer>
      </Menu>
    </>
  );
};

export default DateTimeDrawer;
