import { render } from '@testing-library/react';
import Window from '../Window';
import exp from 'constants';

describe('Windows', () => {
  const clickHandler = jest.fn();
  beforeEach(() => {
    clickHandler.mockReset();
  });

  it('should render for default values', () => {
    const { container } = render(
      <Window>
        <div>Test</div>
      </Window>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with top bar component values', () => {
    const { container } = render(
      <Window topBar={<div>Top bar</div>}>
        <div>Test</div>
      </Window>,
    );

    expect(container).toMatchSnapshot();
    expect(container.querySelector('.top-bar')).toBeDefined();
  });
});
