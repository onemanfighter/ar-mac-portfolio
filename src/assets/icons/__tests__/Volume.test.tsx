import { render } from '@testing-library/react';
import { VolumeIcon } from '../Volume';

describe('Volume', () => {
  it('should render correctly', () => {
    const { container } = render(<VolumeIcon />);

    expect(container).toMatchSnapshot();
  });
});
