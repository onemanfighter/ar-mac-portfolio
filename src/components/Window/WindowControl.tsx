import { Box, Text, useBoolean } from '@chakra-ui/react';
import {
  ProgramType,
  WindowSize,
  activeAppActionsSelector,
  processStore,
  useShallow,
} from '@processStore';

const CommonBoxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
};

const CommonTextProps = {
  fontSize: 12,
  fontWeight: 'bold',
  _hover: {
    cursor: 'pointer',
  },
  transition: 'all 0.1s',
};

const WindowControl = ({
  app,
  onMaximizeClick,
}: {
  app: ProgramType;
  onMaximizeClick: () => void;
}) => {
  const [opacity, setOpacity] = useBoolean(false);
  const { removeApp, setWindowSize } = processStore(
    useShallow(activeAppActionsSelector),
  );
  const onClose = () => {
    setTimeout(() => {
      removeApp(app);
    }, 300);
  };

  const onMinimize = () => {
    setWindowSize(app, WindowSize.HIDE);
  };
  const onMouseEnter = () => {
    setOpacity.on();
  };

  const onMouseLeave = () => {
    setOpacity.off();
  };

  return (
    <>
      <Box
        aria-label="close"
        width={3}
        height={3}
        borderRadius={'full'}
        bg={'red.500'}
        onClick={onClose}
        {...CommonBoxProps}
      >
        <Text
          {...CommonTextProps}
          opacity={opacity ? 1 : 0}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          x
        </Text>
      </Box>
      <Box
        aria-label="minimize"
        width={3}
        height={3}
        borderRadius={'full'}
        bg={'yellow.500'}
        onClick={onMinimize}
        {...CommonBoxProps}
      >
        <Text
          {...CommonTextProps}
          opacity={opacity ? 1 : 0}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          -
        </Text>
      </Box>
      <Box
        aria-label="maximize"
        width={3}
        height={3}
        borderRadius={'full'}
        bg={'green.500'}
        onClick={onMaximizeClick}
        {...CommonBoxProps}
      >
        <Text
          {...CommonTextProps}
          opacity={opacity ? 1 : 0}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          o
        </Text>
      </Box>
    </>
  );
};

export default WindowControl;
