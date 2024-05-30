export type Position = {
  x: number;
  y: number;
};

export type DraggableProps = {
  children: React.ReactNode;
  position: Position | undefined;
};
