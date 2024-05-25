import { render } from '@testing-library/react';
import BottomBar from '../BottomBar';

describe('BottomBar', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<BottomBar />);

    expect(container).toMatchSnapshot();
  });
});
