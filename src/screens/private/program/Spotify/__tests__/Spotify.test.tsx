import { render } from '@testing-library/react';
import Spotify from '../Spotify';

describe('Spotify', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Spotify />);

    expect(container).toMatchSnapshot();
  });
});
