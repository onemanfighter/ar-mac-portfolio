import { render, screen } from '@testing-library/react';
import Mac from '../Mac';

describe('Mac', () => {
  it('should render mac ', () => {
    const { container } = render(<Mac />);

    expect(container).toMatchSnapshot();
  });
});
