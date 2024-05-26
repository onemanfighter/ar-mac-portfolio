import { render, screen } from '@testing-library/react';
import ModalProvider from '../ModalProvider';
import { renderHook } from '@testing-library/react-hooks';
import { uiStore } from '@uiStore';

describe('ModalProvider', () => {
  it.skip('should render correctly', () => {
    const { result } = renderHook(() => uiStore());

    result.current.Modal.resetModalState();
    const { container } = render(<ModalProvider>App</ModalProvider>);

    jest.runAllTimersAsync();

    expect(container).toMatchSnapshot();
    expect(screen.getByText('App')).toBeDefined();
  });
});
