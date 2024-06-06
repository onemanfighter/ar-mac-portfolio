import { IconButton, Img, Tooltip } from '@chakra-ui/react';
import { IconButtonProps } from './types';
import PROGRAMS from './constants';
import Draggable from 'react-draggable';
import { displayDockSelector, settingsStore, useShallow } from '@settingsStore';
import { getIconSize } from './utils';

const ProgramButton = ({ type }: IconButtonProps) => {
  const { dockSize } = settingsStore(useShallow(displayDockSelector));
  const { name, icon } = PROGRAMS[type] ?? { name: 'Unknown', icon: 'unknown' };
  const size = getIconSize(dockSize);
  return (
    <Draggable handle=".handle" grid={[1, 1]} scale={1}>
      <Tooltip borderRadius={6} label={name} hasArrow arrowSize={15} top={-4}>
        <IconButton
          boxSize={size}
          variant={'none'}
          icon={
            <Img
              src={icon}
              height={size}
              width={size}
              alt={name}
              loading="lazy"
            />
          }
          aria-label={name}
        />
      </Tooltip>
    </Draggable>
  );
};

export default ProgramButton;
