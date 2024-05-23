import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import ModalProvider from '../ModalProvider';
import { Text } from '@chakra-ui/react';
import { uiStore } from '@uiStore';

describe('ModalProvider', () => {
  it.skip('should render correctly', () => {
    renderHook(() => uiStore());
    const { container } = render(
      <ModalProvider>
        <Text>App</Text>
      </ModalProvider>,
    );

    jest.runAllTimers();

    expect(container).toMatchSnapshot();
    expect(screen.getByText('App')).toBeDefined();
  });
});
