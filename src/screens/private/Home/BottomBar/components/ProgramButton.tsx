import { Box, IconButton, Img, Tooltip } from '@chakra-ui/react';
import { IconButtonProps } from './types';
import PROGRAMS from './constants';
import {
  darkModeColorSelector,
  displayDockSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import { getIconSize } from './utils';
import { Draggable } from 'react-beautiful-dnd';

const ProgramButton = ({
  isActive,
  type,
  index,
  id,
  onClickHandler,
}: IconButtonProps) => {
  const { dockSize } = settingsStore(useShallow(displayDockSelector));
  const { bottomBarActiveDot, BottomBarTooltipBgColor, textColor } =
    settingsStore(useShallow(darkModeColorSelector));
  const { name, icon } = PROGRAMS[type] ?? { name: 'Unknown', icon: 'unknown' };
  const size = getIconSize(dockSize);
  return (
    <Draggable draggableId={id} index={index} key={name + '-button'}>
      {(provided) => (
        <Box
          aria-label={`program-button-${type}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          display={'flex'}
          _hover={{
            cursor: 'pointer',
          }}
          _active={{
            cursor: 'pointer',
          }}
          flexDir={'column'}
          alignItems={'center'}
          onClick={() => {
            onClickHandler(type);
          }}
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
          </Tooltip>
          {isActive ? (
            <Box
              boxSize={1}
              bgColor={bottomBarActiveDot}
              borderRadius={'full'}
            />
          ) : null}
        </Box>
      )}
    </Draggable>
  );
};

export default ProgramButton;
