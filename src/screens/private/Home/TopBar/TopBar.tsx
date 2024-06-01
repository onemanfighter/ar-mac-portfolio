import { Box, Text } from '@chakra-ui/react';
import { TopBarProps } from './type';
import RightSideIcons from './RightSideIcons';
import LeftSideIcons from './LeftSideIcons';

const TopBar = (props: TopBarProps) => {
  return (
    <Box
      width={'100%'}
      height={7}
      bg={'#000000af'}
      position={'fixed'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignContent={'center'}
      alignItems={'center'}
      zIndex={100}
      px={2}
      top={0}
    >
      <LeftSideIcons />
      <RightSideIcons />
    </Box>
  );
};

export default TopBar;
