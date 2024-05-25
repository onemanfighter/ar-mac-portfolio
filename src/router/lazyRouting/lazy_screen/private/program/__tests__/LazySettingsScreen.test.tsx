import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { LazySettingsComponent } from '../LazySettingsScreen';

describe('LazySettingsComponent', () => {
  it('should render correctly to match snapshot', async () => {
    const { container } = render(<LazySettingsComponent />);

    await waitFor(() => expect(screen.getByText('Setting')).toBeDefined());
    expect(container).toMatchSnapshot();
  });
});
