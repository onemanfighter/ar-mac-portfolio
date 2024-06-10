/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, IconButton, Input } from '@chakra-ui/react';
import { ChromeProps } from './type';
import { LeftChromeIcons } from './components';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import { appStore, chromeSelector } from '@appStore';
import { MenuIcon } from '@assets';
import { useEffect, useState } from 'react';

const Chrome = (props: ChromeProps) => {
  const { mainColor, iconColor } = settingsStore(
    useShallow(darkModeColorSelector),
  );
  const { currentLink } = appStore(useShallow(chromeSelector));
  const [value, setValue] = useState(currentLink);

  useEffect(() => {
    setValue(currentLink);
  }, [currentLink]);

  return (
    <Box height={'100%'} aria-label="chrome">
      <Box
        height={'36px '}
        bg={mainColor}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        filter={{
          blur: '5px',
        }}
        borderBottom={'1px solid #e1e1e1'}
        borderTopRadius={4}
        columnGap={2}
      >
        <LeftChromeIcons />
        <Input
          aria-label="chrome-input"
          size={'sm'}
          color={iconColor}
          value={value}
          borderRadius={'20'}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <IconButton
          size={'sm'}
          aria-label="chrome-menu"
          variant={'ghost'}
          borderRadius={'full'}
          _hover={{
            bg: 'gray.600',
          }}
          onClick={() => {}}
          icon={<MenuIcon width={'20px'} height={'20px'} color={iconColor} />}
        />
      </Box>
      <iframe
        aria-label="github"
        width="100%"
        height="100%"
        src={currentLink}
      ></iframe>
    </Box>
  );
};

export default Chrome;
