import Draggable from 'react-draggable';
import { DraggableProps } from './types';

const DraggableProvider = ({ children }: DraggableProps) => {
  return (
    <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[25, 25]}
      scale={1}
    >
      {children}
    </Draggable>
  );
};

export default DraggableProvider;
