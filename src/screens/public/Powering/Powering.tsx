import { Box, Progress } from '@chakra-ui/react';
import { MacIcon } from '@assets';
import { useEffect, useState } from 'react';
import { processStore, powerSelector, useShallow } from '@processStore';

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
      aria-label="powering-screen"
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
          aria-label="powering-progress"
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
