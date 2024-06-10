import { render } from '@testing-library/react';
import { ArrowLeftIcon } from '../ArrowLeft';

describe('ArrowLeftIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<ArrowLeftIcon />);

    expect(container).toMatchSnapshot();
  });
});
