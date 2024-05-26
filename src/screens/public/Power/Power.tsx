import { Box, IconButton } from '@chakra-ui/react';
import { MacIcon, PowerIcon } from '@assets';
import { PowerProps } from './type';
import { processStore } from '@processStore';
import { powerSelector, useShallow } from '@processStore/selector';

const Power = (props: PowerProps) => {
  const { poweringOn } = processStore(useShallow(powerSelector));

  const powerClickHandler = () => {
    poweringOn();
  };
  return (
    <Box
      bg={'black'}
      display={'flex'}
      flex={1}
      alignItems={'center'}
      height={'100vh'}
      rowGap={100}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <MacIcon />
      <Box>
        <IconButton
          aria-label="Power Button"
          icon={<PowerIcon />}
          color={'white'}
          _hover={{ bg: 'white', color: 'black', transform: 'scale(1.1)' }}
          _active={{ bg: 'white', color: 'black', transform: 'scale(0.9)' }}
          transition={'all 0.5s'}
          variant={'outline'}
          onClick={powerClickHandler}
          size="lg"
        />
      </Box>
    </Box>
  );
};

export default Power;
