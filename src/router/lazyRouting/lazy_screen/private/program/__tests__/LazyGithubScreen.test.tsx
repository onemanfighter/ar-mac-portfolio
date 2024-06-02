import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { LazyGithubComponent } from '../LazyGithubScreen';
import { appStore } from '@appStore';

describe('LazyGithubComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => appStore());
    const { container } = render(<LazyGithubComponent />);

    await waitFor(() => expect(screen.getByLabelText('github')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
