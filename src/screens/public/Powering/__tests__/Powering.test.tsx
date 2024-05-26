import { render } from '@testing-library/react';
import Powering from '../Powering';

describe('PowerOff', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Powering />);

    expect(container).toMatchSnapshot();
  });
});
