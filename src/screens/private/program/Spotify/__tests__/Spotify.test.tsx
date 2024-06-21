import { fireEvent, render, screen } from '@testing-library/react';
import Spotify from '../Spotify';
import { renderHook } from '@testing-library/react-hooks';
import { appStore, spotifySelector } from '@appStore';

describe('Spotify', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Spotify />);

    expect(container).toMatchSnapshot();
  });

  it('should invoke back button callback on back-button press.', () => {
    const { result } = renderHook(() => appStore(spotifySelector));
    const { container } = render(<Spotify />);

    expect(result.current.getCurrentPlaylist()).toEqual({
      name: 'A.R. Rahman',
      url: 'https://open.spotify.com/embed/artist/1mYsTxnqsietFxj1OgoGbG?utm_source=generator',
    });
    fireEvent.click(screen.getByLabelText('back-button'));

    expect(container).toMatchSnapshot();
    expect(result.current.getCurrentPlaylist()).toBeUndefined();
  });
});
