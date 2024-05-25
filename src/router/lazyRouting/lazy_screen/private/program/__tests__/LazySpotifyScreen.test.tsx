import { render, screen, waitFor } from '@testing-library/react';
import { LazySpotifyComponent } from '../LazySpotifyScreen';

describe('LazyBinComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazySpotifyComponent />);

    await waitFor(() => expect(screen.getByText('Spotify')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
