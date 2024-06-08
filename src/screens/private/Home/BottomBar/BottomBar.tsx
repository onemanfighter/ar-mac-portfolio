import { Box } from '@chakra-ui/react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { BottomBarProps, ProgramItem } from './type';
import { ProgramButton, ProgramType } from './components';
import { useState } from 'react';
import { reorder } from './utils';
import PROGRAMS from './components/constants';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const InitialProgramOrderList: ProgramItem[] = Object.entries(PROGRAMS).map(
  (value) => ({
    type: value[0] as ProgramType,
    name: value[1].name,
    id: value[1].name,
  }),
);

const BottomBar = (_props: BottomBarProps) => {
  const [state, setState] = useState<ProgramItem[]>(InitialProgramOrderList);
  const { bottomBarBgColor } = settingsStore(useShallow(darkModeColorSelector));

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newList = reorder(
      state,
      result.source.index,
      result.destination.index,
    );

    setState(newList);
  }
  return (
    <Box
      aria-label="bottom-bar"
      w={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignContent={'center'}
      alignItems={'center'}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list" direction="horizontal">
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              display={'flex'}
              height={'auto'}
              p={1}
              my={1}
              mx={'auto'}
              position={'fixed'}
              alignItems={'center'}
              transition={'all 0.3s ease-in-out'}
              bg={bottomBarBgColor}
              borderRadius={'3xl'}
              border={'1px solid gray'}
              dropShadow={'md'}
              bottom={0}
              style={{ backdropFilter: 'blur(6px)' }}
              zIndex={10}
              gap={4}
            >
              {state.map((program, index) => {
                return (
                  <ProgramButton
                    type={program.type}
                    key={program.name}
                    id={program.id}
                    isActive
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default BottomBar;
