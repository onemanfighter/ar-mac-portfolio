import { DraggableProvider } from '@providers';
import { WindowProps } from './types';
import { Box, useBoolean } from '@chakra-ui/react';

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
  const [maximized, setMaximized] = useBoolean(false);
  const onClose = () => {
    console.log('close');
  };

  return (
    <DraggableProvider position={maximized ? { x: 0, y: 28 } : undefined}>
      <Box
        width={maximized ? '100%' : '50%'}
        height={maximized ? '82%' : '55%'}
        flex={1}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        borderRadius={'6px'}
        {...(maximized
          ? { transition: 'all 0.2s' }
          : { transition: 'all 0.08s' })}
      >
        <Box
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
    </DraggableProvider>
  );
};

export default Window;
