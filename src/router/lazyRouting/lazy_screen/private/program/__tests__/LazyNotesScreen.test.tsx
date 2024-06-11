import { render, screen, waitFor } from '@testing-library/react';
import { LazyNotesComponent } from '../LazyNotesScreen';
import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '@appStore';
import { processStore } from '@processStore';
import { settingsStore } from '@settingsStore';

describe('LazyNotesComponent', () => {
  it('should render correctly to match snapshot', async () => {
    renderHook(() => appStore());
    renderHook(() => processStore());
    renderHook(() => settingsStore());

    const { container } = render(<LazyNotesComponent />);

    await waitFor(() =>
      expect(screen.getByLabelText('notes-app')).toBeDefined(),
    );
    expect(container).toMatchSnapshot();
  });
});
