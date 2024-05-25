import { render } from '@testing-library/react';
import Finder from '../Finder';

describe('Finder', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Finder />);

    expect(container).toMatchSnapshot();
  });
});
