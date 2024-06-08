import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { formatDate } from './utils';
import { useShallow } from '@processStore';
import { dateTimeSelector, uiStore } from '@uiStore';

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
  const { date, time } = uiStore(useShallow(dateTimeSelector));

  return (
    <Box
      width={'100%'}
      alignItems={'center'}
      position={'fixed'}
      top={'10%'}
      display={'flex'}
      flexDirection={'column'}
      zIndex={0}
      aria-label="time-date-component"
    >
      <MemoisedDateComponent date={date?.slice(0, 10) ?? ''} />
      <MemoisedTimeComponent time={time?.slice(0, 5) ?? ''} />
    </Box>
  );
};

export default TimeDateComponent;
