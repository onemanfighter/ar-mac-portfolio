import { Box } from '@chakra-ui/react';
import { TopBarProps } from './type';
import RightSideIcons from './RightSideIcons';

const TopBar = (props: TopBarProps) => {
  // BG logic
  return (
    <Box
      width={'100vw'}
      height={8}
      bg={'#000000af'}
      position={'fixed'}
      top={0}
      left={0}
      zIndex={100}
    >
      <RightSideIcons />
    </Box>
  );
};

export default TopBar;
