import { fireEvent, render, screen } from '@testing-library/react';
import DraggableProvider from '../DraggableProvider';
import { Box } from '@chakra-ui/react';

describe('Draggable provider', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DraggableProvider
        maximized={false}
        position={{ x: 0, y: 0 }}
        onPositionChange={jest.fn()}
      >
        <Box>test</Box>
      </DraggableProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with custom position', () => {
    const { container } = render(
      <DraggableProvider
        maximized={false}
        position={{ x: 10, y: 10 }}
        onPositionChange={jest.fn()}
      >
        <Box>test</Box>
      </DraggableProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with custom position for maximized', () => {
    const { container } = render(
      <DraggableProvider
        maximized
        position={{ x: 10, y: 10 }}
        onPositionChange={jest.fn()}
      >
        <Box>test</Box>
      </DraggableProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly on dragging', () => {
    const { container } = render(
      <DraggableProvider
        maximized
        position={{ x: 0, y: 0 }}
        onPositionChange={jest.fn()}
      >
        <Box>test</Box>
      </DraggableProvider>,
    );

    fireEvent.drag(screen.getByText('test'), {
      clientX: 10,
      clientY: 10,
    });

    expect(container).toMatchSnapshot();
  });
});
