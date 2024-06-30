import { Box } from '@chakra-ui/react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { uiStore, dateTimeSelector } from '@uiStore';

const ClockComponent = ({ timeZone }: { timeZone?: string }) => {
  const { dateObject } = uiStore(dateTimeSelector);

  return (
    <Box bgSize={72} borderRadius={'full'} bg={'white'}>
      <Clock size={72} value={dateObject} />
    </Box>
  );
};

const WorldClockComponent = () => {
  return (
    <Box
      display={'flex'}
      flexDir={'row'}
      justifyContent={'space-between'}
      bg={'#1f1f1f'}
      px={2}
      my={2}
      py={4}
      shadow={'0 0 10px rgba(0, 0, 0, 0.2)'}
      borderRadius={10}
    >
      <ClockComponent />
      <ClockComponent />
      <ClockComponent />
      <ClockComponent />
    </Box>
  );
};

export default WorldClockComponent;
