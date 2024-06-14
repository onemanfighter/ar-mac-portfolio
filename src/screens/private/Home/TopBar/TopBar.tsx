import { Box, Text } from '@chakra-ui/react';
import { TopBarProps } from './type';
import RightSideIcons from './RightSideIcons';
import LeftSideIcons from './LeftSideIcons';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const TopBar = (props: TopBarProps) => {
  const { mainColor } = settingsStore(useShallow(darkModeColorSelector));

  return (
    <Box
      width={'100%'}
      height={7}
      bg={mainColor}
      position={'fixed'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignContent={'center'}
      alignItems={'center'}
      zIndex={10}
      px={2}
      top={0}
      transition={'all 0.3s ease-in-out'}
    >
      <LeftSideIcons />
      <RightSideIcons />
    </Box>
  );
};

export default TopBar;
