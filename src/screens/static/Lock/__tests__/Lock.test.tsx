import { render } from '@testing-library/react';
import Lock from '../Lock';

describe('Lock', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Lock />);

    expect(container).toMatchSnapshot();
  });
});
