import { appStore, chromeSelector } from '@appStore';
import { BackIcon, ForwardIcon, RefreshIcon } from '@assets';
import { Box, IconButton } from '@chakra-ui/react';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const LeftChromeIcons = () => {
  const { iconColor } = settingsStore(useShallow(darkModeColorSelector));
  const { popLinkStack, clearLinkStack } = appStore(useShallow(chromeSelector));

  return (
    <Box display={'flex'} justifyContent={'flex-start'} gap={0}>
      <IconButton
        size={'sm'}
        aria-label="chrome-back"
        variant={'ghost'}
        borderRadius={'full'}
        _hover={{
          bg: 'gray.600',
        }}
        onClick={popLinkStack}
        icon={<BackIcon width={'16px'} height={'16px'} color={iconColor} />}
      />
      <IconButton
        size={'sm'}
        aria-label="chrome-forward"
        variant={'ghost'}
        borderRadius={'full'}
        _hover={{
          bg: 'gray.600',
        }}
        icon={<ForwardIcon width={'16px'} height={'16px'} color={iconColor} />}
      />
      <IconButton
        size={'sm'}
        aria-label="chrome-refresh"
        variant={'ghost'}
        borderRadius={'full'}
        _hover={{
          bg: 'gray.600',
        }}
        onClick={clearLinkStack}
        icon={<RefreshIcon width={'16px'} height={'16px'} color={iconColor} />}
      />
    </Box>
  );
};

export default LeftChromeIcons;
