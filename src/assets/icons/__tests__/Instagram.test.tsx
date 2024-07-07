import { render } from '@testing-library/react';
import { InstagramIcon } from '../Instagram';

describe('Instagram', () => {
  it('should render correctly', () => {
    const { container } = render(<InstagramIcon />);

    expect(container).toMatchSnapshot();
  });
});
