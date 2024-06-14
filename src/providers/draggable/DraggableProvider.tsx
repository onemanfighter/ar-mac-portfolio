import Draggable from 'react-draggable';
import { useWindowDimensions } from '@hooks';
import { DraggableProps } from './types';

const DraggableProvider = ({
  children,
  position,
  maximized,
  onPositionChange,
}: DraggableProps) => {
  const { width, height } = useWindowDimensions();

  console.log(position);

  const positionHandler = maximized
    ? {}
    : {
        onStop: (e: any, data: any) => {
          const { x, y } = data;
          onPositionChange({ x, y });
        },
      };

  return (
    <Draggable
      handle=".handle"
      bounds={{ left: 0, top: 0, right: width, bottom: height }}
      positionOffset={{ x: 0, y: 28 }}
      defaultPosition={maximized ? position : { x: 0, y: 0 }}
      position={!maximized ? position : { x: 0, y: 0 }}
      grid={[3, 3]}
      scale={1}
      {...positionHandler}
    >
      {children}
    </Draggable>
  );
};

export default DraggableProvider;
