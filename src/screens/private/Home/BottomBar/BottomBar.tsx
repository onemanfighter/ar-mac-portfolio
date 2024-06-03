import { Box } from '@chakra-ui/react';
import { BottomBarProps } from './type';
import { displayDockSelector, settingsStore, useShallow } from '@settingsStore';

const BottomBar = (props: BottomBarProps) => {
  const { dockSize } = settingsStore(useShallow(displayDockSelector));
  return (
    <Box
      aria-label="bottom-bar"
      width={`${dockSize}%`}
      height={`${dockSize / 10}%`}
      m={1}
      bg={'black'}
      position={'absolute'}
      bottom={0}
      left={0}
      zIndex={-10}
    >
      AMIT
    </Box>
  );
};

export default BottomBar;
