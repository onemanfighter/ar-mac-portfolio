import { render, screen, waitFor } from '@testing-library/react';
import { LazyChromeComponent } from '../LazyChromeScreen';
import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '@appStore';
import { processStore } from '@processStore';
import { settingsStore } from '@settingsStore';

describe('LazyChromeComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => appStore());
    renderHook(() => processStore());
    renderHook(() => settingsStore());

    const { container } = render(<LazyChromeComponent />);

    await waitFor(() => expect(screen.getByLabelText('chrome')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
