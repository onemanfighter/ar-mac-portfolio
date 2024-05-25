import { render } from '@testing-library/react';
import PowerOn from '../Power';

describe('PowerOn', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<PowerOn />);

    expect(container).toMatchSnapshot();
  });
});
