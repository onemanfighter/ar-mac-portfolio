import Draggable from 'react-draggable';

import { DraggableProps } from './types';

const DraggableProvider = ({ children, position }: DraggableProps) => {
  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 100, y: 200 }}
      position={position}
      grid={[1, 1]}
      scale={1}
    >
      {children}
    </Draggable>
  );
};

export default DraggableProvider;
