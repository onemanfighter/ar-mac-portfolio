import { render } from '@testing-library/react';
import { MacIcon } from '../../mac';
describe('MacIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<MacIcon />);

    expect(container).toMatchSnapshot();
  });
});
