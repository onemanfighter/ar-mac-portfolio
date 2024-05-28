import { render } from '@testing-library/react';
import UserLoginComponent from '../UserLogin';

describe('UserLogin', () => {
  it('should return the default user login component', () => {
    const { container } = render(<UserLoginComponent />);

    expect(container).toMatchSnapshot();
  });
});
