import { DraggableProvider } from '@providers';
import { WindowProps } from './types';
import { Box } from '@chakra-ui/react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import { useWindowDimensions } from '@hooks';
import React, { useState } from 'react';
import './css/window.css';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import {
  WindowSize,
  activeAppActionsSelector,
  activeAppSelector,
  processStore,
} from '@processStore';
import WindowCloseControl from './WindowControl';

const Window = ({ children, topBar, app }: WindowProps) => {
  const { windowTabBgColor } = settingsStore(useShallow(darkModeColorSelector));
  const currentApp = processStore(useShallow(activeAppSelector))(app);
  const { setWindowSize, updatePosition } = processStore(
    useShallow(activeAppActionsSelector),
  );

  const [componentDimension, setComponentDimension] = useState({
    width: 700,
    height: 500,
  });
  const { width, height } = useWindowDimensions();

  const onResize = (e: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    const { width, height } = size;
    setComponentDimension({ width, height });
  };

  const maximized = currentApp?.size === WindowSize.MAX ? true : false;

  const onMaximizeClick = () => {
    const newSize = maximized ? WindowSize.DEFAULT : WindowSize.MAX;
    setWindowSize(app, newSize);
  };

  const onPositionChange = (position: { x: number; y: number }) => {
    updatePosition(app, position);
  };

  return (
    <DraggableProvider
      maximized={maximized}
      position={currentApp?.position ?? { x: 0, y: 0 }}
      onPositionChange={onPositionChange}
    >
      <ResizableBox
        width={maximized ? width : componentDimension.width}
        height={maximized ? height : componentDimension.height}
        onResize={onResize}
        lockAspectRatio={true}
        maxConstraints={[width * 0.99, height * 0.99]}
        // Below line decides whether window is resizable or not.
        resizeHandles={maximized ? [] : ['se']}
        handleSize={[10, 10]}
        minConstraints={[700, 500]}
        style={
          maximized ? { transition: 'all 0.2s' } : { transition: 'all 0s' }
        }
      >
        <Box
          width={'100%'}
          height={'100%'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          flex={1}
          borderRadius={'6px'}
        >
          <Box
            // Below line decides whether window is movable or not.
            {...(!maximized ? { className: 'handle' } : {})}
            width={'100%'}
            height={6}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            border={'1px solid #666'}
            bg={windowTabBgColor}
            onDoubleClick={onMaximizeClick}
            borderTopRadius={6}
            px={3}
            gap={2}
            transition={'all 0.3s ease-in-out'}
          >
            <WindowCloseControl app={app} onMaximizeClick={onMaximizeClick} />
            <Box width="100%" height={6}>
              {topBar}
            </Box>
          </Box>
          <Box
            width={'100%'}
            height={'100%'}
            bg={'#1f1f1f'}
            borderBottomRadius={6}
            border={'1px solid #000'}
          >
            {children}
          </Box>
        </Box>
      </ResizableBox>
    </DraggableProvider>
  );
};

export default React.memo(Window, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children;
});
