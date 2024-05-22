import { render, screen } from '@testing-library/react';
import ChakraUIProvider from '../ChakraUIProvider';
import { Text } from '@chakra-ui/react';

describe('ChakraUIProvider', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ChakraUIProvider>
        <Text>App</Text>
      </ChakraUIProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('App')).toBeDefined();
  });
});
