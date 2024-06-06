import { Box, IconButton, Img, Tooltip } from '@chakra-ui/react';
import { IconButtonProps } from './types';
import PROGRAMS from './constants';
import { displayDockSelector, settingsStore, useShallow } from '@settingsStore';
import { getIconSize } from './utils';
import { Draggable } from 'react-beautiful-dnd';

const ProgramButton = ({ isActive, type, index, id }: IconButtonProps) => {
  const { dockSize } = settingsStore(useShallow(displayDockSelector));
  const { name, icon } = PROGRAMS[type] ?? { name: 'Unknown', icon: 'unknown' };
  const size = getIconSize(dockSize);
  return (
    <Draggable draggableId={id} index={index} key={name + '-button'}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
        >
          <Tooltip
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
            <Box boxSize={1} bgColor={'white'} borderRadius={'full'} />
          ) : null}
        </Box>
      )}
    </Draggable>
  );
};

export default ProgramButton;
