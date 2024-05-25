import { render, screen, waitFor } from '@testing-library/react';
import { LazyStaticHostScreen } from '../LazyStaticHostScreen';

describe('LazyStaticHostScreen', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyStaticHostScreen />);

    await waitFor(() => expect(screen.getByText('StaticHost')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
