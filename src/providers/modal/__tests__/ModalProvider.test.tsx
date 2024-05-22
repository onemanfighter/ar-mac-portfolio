import { render, screen } from '@testing-library/react';
import ModalProvider from '../ModalProvider';
import { Text } from '@chakra-ui/react';

describe('ModalProvider', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ModalProvider>
        <Text>App</Text>
      </ModalProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('App')).toBeDefined();
  });
});
