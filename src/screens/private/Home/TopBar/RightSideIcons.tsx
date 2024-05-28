import { Box, Button } from '@chakra-ui/react';
import { uiStore } from '@uiStore';
import { dateTimeSelector } from '@uiStore/selector';

const DateTime = () => {
  const { time, date } = uiStore(dateTimeSelector);

  return <Button variant={'ghost'}>{time}</Button>;
};

const RightSideIcons = () => {
  return (
    <Box flex={1} flexDir={'row'} alignContent={'flex-end'}>
      <DateTime />
    </Box>
  );
};

export default RightSideIcons;
