import { render, screen, waitFor } from '@testing-library/react';
import { LazyGithubComponent } from '../LazyGithubScreen';

describe('LazyGithubComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazyGithubComponent />);

    await waitFor(() => expect(screen.getByText('Github')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
