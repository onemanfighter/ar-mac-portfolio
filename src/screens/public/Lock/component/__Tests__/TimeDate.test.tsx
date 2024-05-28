import { render } from '@testing-library/react';
import TimeDateComponent from '../TimeDate';

describe('TimeDate', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date(2024, 5, 10, 12, 30, 0, 0));
  });

  it('should return the default time date component', () => {
    const { container } = render(<TimeDateComponent />);

    expect(container).toMatchSnapshot();
  });
});
