import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DAY_MAP } from './constants';
import { formatDate } from './utils';

const DateComponent = ({ date }: { date: string }) => {
  return (
    <Text fontSize={'2xl'} fontWeight={'bold'} color={'white'} opacity={0.8}>
      {formatDate(date)}
    </Text>
  );
};

const TimeComponent = ({ time }: { time: string }) => {
  return (
    <Text fontSize={'8xl'} fontWeight={'bold'} color={'white'} opacity={0.8}>
      {time}
    </Text>
  );
};
const MemoisedTimeComponent = React.memo(TimeComponent);
const MemoisedDateComponent = React.memo(DateComponent);

const TimeDateComponent = () => {
  const [date, setData] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setData(new Date());
    }, 1000);
  }, []);

  return (
    <Box
      width={'100%'}
      alignItems={'center'}
      position={'fixed'}
      top={'10%'}
      display={'flex'}
      flexDirection={'column'}
      zIndex={0}
    >
      <MemoisedDateComponent date={date.toDateString().slice(0, 10)} />
      <MemoisedTimeComponent time={date.toLocaleTimeString().slice(0, 5)} />
    </Box>
  );
};

export default TimeDateComponent;
