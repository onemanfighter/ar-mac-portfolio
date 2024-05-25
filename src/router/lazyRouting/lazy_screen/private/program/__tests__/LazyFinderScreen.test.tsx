import { render, screen, waitFor } from '@testing-library/react';
import { LazyFinderComponent } from '../LazyFinderScreen';

describe('LazyFinderComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyFinderComponent />);

    await waitFor(() => expect(screen.getByText('Finder')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
