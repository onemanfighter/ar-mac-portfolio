import { render } from '@testing-library/react';
import Home from '../Home';
import { renderHook } from '@testing-library/react-hooks';
import { uiStore } from '@uiStore';
import { wallpaperSelector } from '@settingsStore/selector';
import { settingsStore } from '@settingsStore';

describe('Home', () => {
  it.skip('should render correctly to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
