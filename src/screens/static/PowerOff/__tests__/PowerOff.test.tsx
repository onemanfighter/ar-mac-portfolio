import { render } from '@testing-library/react';
import PowerOff from '../PowerOff';

describe('PowerOff', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<PowerOff />);

    expect(container).toMatchSnapshot();
  });
});
