import { Box, Progress } from '@chakra-ui/react';
import { MacIcon } from '@assets';
import { useEffect, useState } from 'react';
import { processStore } from '@processStore';
import { powerSelector, useShallow } from '@processStore/selector';

const Powering = () => {
  const [value, setValue] = useState<number>(0);
  const { turnOn } = processStore(useShallow(powerSelector));

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 50);

    // Navigate to static host after 2 seconds of loading
    if (value === 100) {
      clearInterval(interval);
      setTimeout(() => {
        turnOn();
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [turnOn, value]);

  return (
    <Box
      bg={'black'}
      display={'flex'}
      flex={1}
      id="powering-container"
      alignItems={'center'}
      height={'100vh'}
      rowGap={100}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <MacIcon />
      <Box width={250}>
        <Progress
          value={value}
          id="powering-progress"
          borderRadius={10}
          size="sm"
          color={'gray'}
          backgroundColor={'white'}
        />
      </Box>
    </Box>
  );
};

export default Powering;
