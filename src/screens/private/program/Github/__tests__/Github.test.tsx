import { render } from '@testing-library/react';
import Github from '../Github';

describe('Github', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Github />);

    expect(container).toMatchSnapshot();
  });
});
