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
import {
  activeAppActionsSelector,
  activeAppSelector,
  processStore,
  WindowSize,
} from '@processStore';

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
  const { addApp, setWindowSize } = processStore(
    useShallow(activeAppActionsSelector),
  );
  const getActiveApp = processStore(useShallow(activeAppSelector));

  function onDragEnd(result: DropResult) {
    if (
      result.destination &&
      result.destination.index !== result.source.index
    ) {
      const newList = reorder(
        state,
        result.source.index,
        result.destination.index,
      );

      setState(newList);
    }
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
                const currentApp = getActiveApp(program.type);
                return (
                  <ProgramButton
                    type={program.type}
                    key={program.name}
                    id={program.id}
                    isActive={currentApp !== undefined}
                    index={index}
                    onClickHandler={(app: ProgramType) => {
                      !currentApp
                        ? setTimeout(() => {
                            addApp(app);
                          }, 500)
                        : setWindowSize(app, WindowSize.DEFAULT);
                    }}
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
