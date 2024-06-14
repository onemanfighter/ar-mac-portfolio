import { Box, Img, Text, Tooltip } from '@chakra-ui/react';
import { ProgramButtonProps } from './types';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import { APP_ICON_SIZE } from './constants';

const ProgramButton = ({
  icon,
  name,
  isActive,
  onClickHandler,
}: ProgramButtonProps) => {
  const { bottomBarActiveDot, BottomBarTooltipBgColor, textColor } =
    settingsStore(useShallow(darkModeColorSelector));
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
        boxSize={APP_ICON_SIZE}
        src={icon}
        height={APP_ICON_SIZE}
        width={APP_ICON_SIZE}
        alt={name}
        _active={{
          filter: 'brightness(0.6)',
        }}
        loading="lazy"
      />
      <Text color={textColor} fontSize={'sm'}>
        {name}
      </Text>
      {isActive ? (
        <Box boxSize={1} bgColor={bottomBarActiveDot} borderRadius={'full'} />
      ) : null}
    </Box>
  );
};

export default ProgramButton;
