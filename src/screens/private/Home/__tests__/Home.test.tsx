import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { uiStore } from '@uiStore';
import { settingsStore } from '@settingsStore';
import Home from '../Home';
import { processStore } from '@processStore';
import { appStore } from '@appStore';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('Home', () => {
  it('should render correctly to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
