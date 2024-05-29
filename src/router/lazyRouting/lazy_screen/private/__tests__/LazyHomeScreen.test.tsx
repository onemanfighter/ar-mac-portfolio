import { render, screen, waitFor } from '@testing-library/react';
import { LazyHomeComponent } from '../LazyHomeScreen';

describe('LazyHomeComponent', () => {
  it.skip('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyHomeComponent />);

    await waitFor(() =>
      expect(screen.getByLabelText('wallpaper-component-with-1')).toBeDefined(),
    );
    expect(container).toMatchSnapshot();
  }, 10000);
});
