import Draggable from 'react-draggable';

import { useWindowDimensions } from '@hooks';

import { DraggableProps } from './types';

const DraggableProvider = ({ children, position }: DraggableProps) => {
  const { width, height } = useWindowDimensions();

  return (
    <Draggable
      handle=".handle"
      bounds={{ left: 0, top: 0, right: width, bottom: height }}
      positionOffset={{ x: 0, y: 28 }}
      defaultPosition={{ x: 600, y: 150 }}
      position={position}
      grid={[1, 1]}
      scale={1}
    >
      {children}
    </Draggable>
  );
};

export default DraggableProvider;
