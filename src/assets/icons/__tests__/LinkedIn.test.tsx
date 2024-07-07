import { render } from '@testing-library/react';
import { LinkedInIcon } from '../LinkedIn';

describe('LinkedIn', () => {
  it('should render correctly', () => {
    const { container } = render(<LinkedInIcon />);

    expect(container).toMatchSnapshot();
  });
});
