import { render } from '@testing-library/react';
import { BrightnessIcon } from '../Brightness';

describe('Brightness', () => {
  it('should render correctly', () => {
    const { container } = render(<BrightnessIcon />);

    expect(container).toMatchSnapshot();
  });
});
