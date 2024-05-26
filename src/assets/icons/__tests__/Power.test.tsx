import { render } from '@testing-library/react';
import { PowerIcon } from '../PowerIcon';

describe('PowerIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<PowerIcon />);

    expect(container).toMatchSnapshot();
  });
});
