import { render } from '@testing-library/react';
import Bin from '../Bin';

describe('Bin', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Bin />);

    expect(container).toMatchSnapshot();
  });
});
