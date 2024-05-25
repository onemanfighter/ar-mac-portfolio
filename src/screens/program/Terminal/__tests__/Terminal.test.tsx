import { render } from '@testing-library/react';
import Terminal from '../Terminal';

describe('Terminal', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Terminal />);

    expect(container).toMatchSnapshot();
  });
});
