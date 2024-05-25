import { render, screen, waitFor } from '@testing-library/react';
import { LazyHomeComponent } from '../LazyHomeScreen';

describe('LazyHomeComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyHomeComponent />);

    await waitFor(() => expect(screen.getByText('Home')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
