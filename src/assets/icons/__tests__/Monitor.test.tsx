import { render } from '@testing-library/react';
import { MonitorIcon } from '../Monitor';

describe('Monitor', () => {
  it('should render correctly', () => {
    const { container } = render(<MonitorIcon />);

    expect(container).toMatchSnapshot();
  });
});
