import { render, screen, waitFor } from '@testing-library/react';
import { LazyLockComponent } from '../LazyLockScreen';
import { renderHook } from '@testing-library/react-hooks';
import { powerSelector, processStore } from '@processStore';

describe('LazyLockComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => processStore(powerSelector));

    render(<LazyLockComponent />);

    await waitFor(() => expect(screen.getByAltText('Profile')).toBeDefined());
  });
});
