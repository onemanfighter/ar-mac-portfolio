import { render } from '@testing-library/react';
import { InfoIcon } from '../InfoIcon';

describe('Apple', () => {
  it('should render correctly', () => {
    const { container } = render(<InfoIcon />);

    expect(container).toMatchSnapshot();
  });
});
