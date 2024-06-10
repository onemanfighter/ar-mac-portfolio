import { render } from '@testing-library/react';
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
});
