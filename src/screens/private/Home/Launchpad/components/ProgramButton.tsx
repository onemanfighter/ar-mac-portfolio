import { Box, Img, Tooltip } from '@chakra-ui/react';
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
      <Tooltip
        bg={BottomBarTooltipBgColor}
        color={textColor}
        borderRadius={6}
        label={name}
        hasArrow
        arrowSize={15}
        top={-4}
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
      </Tooltip>
      {isActive ? (
        <Box boxSize={1} bgColor={bottomBarActiveDot} borderRadius={'full'} />
      ) : null}
    </Box>
  );
};

export default ProgramButton;
