import { render, screen, waitFor } from '@testing-library/react';
import { LazySpotifyComponent } from '../LazySpotifyScreen';
import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '@appStore';

describe('LazyBinComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => appStore());
    const { container } = render(<LazySpotifyComponent />);

    await waitFor(() => expect(screen.getByLabelText('spotify')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
