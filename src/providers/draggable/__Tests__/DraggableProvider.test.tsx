import { render } from '@testing-library/react';
import DraggableProvider from '../DraggableProvider';
import { Box } from '@chakra-ui/react';

describe('Draggable provider', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DraggableProvider position={{ x: 0, y: 0 }}>
        <Box>test</Box>
      </DraggableProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
