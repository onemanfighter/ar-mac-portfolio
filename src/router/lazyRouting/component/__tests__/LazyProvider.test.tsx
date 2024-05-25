import { render } from '@testing-library/react';
import LazyProvider from '../LazyProvider';

describe('LazyProvider', () => {
  it('should render', () => {
    const { container } = render(
      <LazyProvider>
        <div>Test</div>
      </LazyProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
