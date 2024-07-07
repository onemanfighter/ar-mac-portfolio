import { render } from '@testing-library/react';
import { YoutubeIcon } from '../Youtube';

describe('Youtube', () => {
  it('should render correctly', () => {
    const { container } = render(<YoutubeIcon />);

    expect(container).toMatchSnapshot();
  });
});
