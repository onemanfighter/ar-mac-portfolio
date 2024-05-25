import { render } from '@testing-library/react';
import VsCode from '../VsCode';

describe('VsCode', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<VsCode />);

    expect(container).toMatchSnapshot();
  });
});
