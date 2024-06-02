import { render, screen, waitFor } from '@testing-library/react';
import { LazyMacComponent } from '../LazyMacScreen';
import { renderHook } from '@testing-library/react-hooks';
import { uiStore } from '@uiStore';

describe('LazyMacComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => uiStore());
    const { container } = render(<LazyMacComponent />);

    await waitFor(() => expect(screen.getByLabelText('mac')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
