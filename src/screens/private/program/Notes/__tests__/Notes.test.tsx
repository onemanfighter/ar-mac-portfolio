import { render } from '@testing-library/react';
import Notes from '../Notes';

describe('Notes', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<Notes />);

    expect(container).toMatchSnapshot();
  });
});
