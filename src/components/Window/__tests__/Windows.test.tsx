import { fireEvent, render, screen } from '@testing-library/react';
import Window from '../Window';
import { ProgramType } from '@processStore';

describe('Windows', () => {
  const clickHandler = jest.fn();
  beforeEach(() => {
    clickHandler.mockReset();
  });

  it('should render for default values', () => {
    const { container } = render(
      <Window app={ProgramType.FINDER}>
        <div>Test</div>
      </Window>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with top bar component values', () => {
    const { container } = render(
      <Window app={ProgramType.FINDER} topBar={<div>Top bar</div>}>
        <div>Test</div>
      </Window>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should trigger close on close button press', () => {
    const { container } = render(
      <Window app={ProgramType.FINDER}>
        <div>Test</div>
      </Window>,
    );

    fireEvent.click(screen.getByLabelText('close'));

    expect(container).toMatchSnapshot();
    expect(container.querySelector('.left-side')).toBeDefined();
  });

  it('should trigger minimize on minimize button press', () => {
    const { container } = render(
      <Window app={ProgramType.FINDER}>
        <div>Test</div>
      </Window>,
    );

    fireEvent.click(screen.getByLabelText('minimize'));

    expect(container).toMatchSnapshot();
    expect(container.querySelector('.left-side')).toBeDefined();
  });

  it('should trigger maximize on maximize button press', () => {
    const { container } = render(
      <Window app={ProgramType.FINDER}>
        <div>Test</div>
      </Window>,
    );

    fireEvent.click(screen.getByLabelText('maximize'));

    expect(container).toMatchSnapshot();
    expect(container.querySelector('.left-side')).toBeDefined();
  });
});
