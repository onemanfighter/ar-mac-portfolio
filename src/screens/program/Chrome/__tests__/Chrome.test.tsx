import { render } from '@testing-library/react';
import Chrome from '../Chrome';

describe('Chrome', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Chrome />);

    expect(container).toMatchSnapshot();
  });
});
