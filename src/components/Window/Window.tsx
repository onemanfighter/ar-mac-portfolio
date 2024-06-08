import { DraggableProvider } from '@providers';
import { WindowProps } from './types';
import { Box, useBoolean } from '@chakra-ui/react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import { useWindowDimensions } from '@hooks';
import { useState } from 'react';
import './css/window.css';

const WindowCloseControl = ({
  onClose,
  onMaximizeClick,
}: {
  onClose: () => void;
  onMaximizeClick: () => void;
}) => {
  return (
    <>
      <Box
        width={3}
        height={3}
        borderRadius={'full'}
        bg={'red.500'}
        onClick={onClose}
        _hover={{
          cursor: 'pointer',
        }}
      ></Box>
      <Box
        width={3}
        height={3}
        borderRadius={'full'}
        bg={'yellow.500'}
        onClick={() => {}}
        _hover={{
          cursor: 'pointer',
        }}
      />
      <Box
        width={3}
        height={3}
        borderRadius={'full'}
        bg={'green.500'}
        onClick={() => {
          onMaximizeClick();
        }}
        _hover={{
          cursor: 'pointer',
        }}
      />
    </>
  );
};

const Window = ({ children, topBar }: WindowProps) => {
  const [componentDimension, setComponentDimension] = useState({
    width: 700,
    height: 500,
  });
  const { width, height } = useWindowDimensions();

  const [maximized, setMaximized] = useBoolean(false);
  const onClose = () => {
    console.log('close');
  };

  const onResize = (e: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    const { width, height } = size;
    setComponentDimension({ width, height });
  };

  return (
    <DraggableProvider position={maximized ? { x: 0, y: 0 } : undefined}>
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
            bg={'#1f1f1fAf'}
            onDoubleClick={setMaximized.toggle}
            borderTopRadius={6}
            px={3}
            gap={2}
            transition={'none'}
          >
            <WindowCloseControl
              onClose={onClose}
              onMaximizeClick={setMaximized.toggle}
            />
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

export default Window;
