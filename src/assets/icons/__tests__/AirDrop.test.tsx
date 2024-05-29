import { render } from '@testing-library/react';
import { AirDropIcon } from '../AirDrop';

describe('AirDrop', () => {
  it('should render correctly', () => {
    const { container } = render(<AirDropIcon />);

    expect(container).toMatchSnapshot();
  });
});
