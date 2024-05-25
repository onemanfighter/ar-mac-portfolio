import { render } from '@testing-library/react';
import RouterProviderComponent from '../RouterProvider';
import { processStore } from '@processStore';
import { loginSelector } from '@processStore/selector';
import { renderHook } from '@testing-library/react-hooks';

jest.mock('@processStore/selector', () => ({
  isLoggedIn: jest.fn().mockImplementation(() => true),
}));

jest.mock('@processStores', () => ({
  isLoggedIn: {
    login: jest.fn(),
  },
}));

describe('RouterProvider', () => {
  it.skip('should render', () => {
    const { result } = renderHook(() => processStore(loginSelector));

    const { container } = render(<RouterProviderComponent />);
    result.current.login();

    expect(container).toMatchSnapshot();
  });
});
