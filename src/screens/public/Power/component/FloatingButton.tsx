import { InfoIcon } from '@assets';
import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

const FloatingButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        variant="outline"
        color="white"
        _hover={{
          bg: 'white',
          color: 'black',
        }}
        icon={<InfoIcon width={'1em'} height={'1em'} />}
        aria-label="landing-page-top-bar-button"
        onClick={onOpen}
        position={'absolute'}
        right={5}
        top={5}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent bg="black" borderLeftWidth={'1px'} borderColor={'white'}>
          <Box
            boxSize={'100%'}
            position={'fixed'}
            color={'white'}
            top={0}
            left={0}
            zIndex={100}
          >
            <IconButton
              variant="outline"
              color="white"
              _hover={{
                bg: 'white',
                color: 'black',
              }}
              icon={<CloseButton width={'1em'} height={'1em'} />}
              aria-label="landing-page-top-bar-button"
              onClick={onClose}
              position={'absolute'}
              right={5}
              top={5}
            />
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FloatingButton;
