import { render } from '@testing-library/react';
import FloatingButton from '../FloatingButton';

describe('Floating button', () => {
  it('should render correctly', () => {
    const { container } = render(<FloatingButton />);

    expect(container).toMatchSnapshot();
  });

  it('should open drawer when button is clicked', () => {
    const { getByLabelText } = render(<FloatingButton />);
    const button = getByLabelText('landing-page-top-bar-button');

    button.click();

    expect(button).toMatchSnapshot();
  });
});
