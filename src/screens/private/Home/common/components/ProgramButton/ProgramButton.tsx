import { Box, Img, Text } from '@chakra-ui/react';
import { ProgramButtonProps } from './types';
import {
  darkModeColorSelector,
  displayDockSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import { APP_ICON_SIZE } from './constants';
import { getIconSize } from './utils';

const ProgramButton = ({
  icon,
  name,
  isActive,
  variant = 'default',
  onClickHandler,
}: ProgramButtonProps) => {
  const { dockSize } = settingsStore(useShallow(displayDockSelector));
  const size = variant === 'bottomBar' ? getIconSize(dockSize) : APP_ICON_SIZE;
  const { bottomBarActiveDot, textColor } = settingsStore(
    useShallow(darkModeColorSelector),
  );
  return (
    <Box
      key={name + '-button'}
      aria-label={`program-button-${name}`}
      display={'flex'}
      _hover={{
        cursor: 'pointer',
      }}
      _active={{
        cursor: 'pointer',
      }}
      flexDir={'column'}
      alignItems={'center'}
      onClick={onClickHandler}
    >
      <Img
        boxSize={size}
        src={icon}
        height={size}
        width={size}
        alt={name}
        _active={{
          filter: 'brightness(0.6)',
        }}
        loading="lazy"
      />
      {variant === 'default' ? (
        <Text color={textColor} fontSize={'sm'}>
          {name}
        </Text>
      ) : null}
      {isActive ? (
        <Box boxSize={1} bgColor={bottomBarActiveDot} borderRadius={'full'} />
      ) : null}
    </Box>
  );
};

export default ProgramButton;
