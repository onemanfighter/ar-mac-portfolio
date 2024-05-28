import { render, screen } from '@testing-library/react';
import TopRightComponent from '../TopRightComponent';
import userEvent from '@testing-library/user-event';

describe('TopRightComponent', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<TopRightComponent />);
    expect(container).toMatchSnapshot();
  });

  it('should render the keyboard icon', () => {
    render(<TopRightComponent />);

    expect(screen.getByLabelText('keyboard-icon')).toBeDefined();
  });

  it('should render the battery icon ', () => {
    render(<TopRightComponent />);

    expect(screen.getByLabelText('battery-icon')).toBeDefined();
  });

  it('should render the wifi icon ', () => {
    render(<TopRightComponent />);

    expect(screen.getByLabelText('wifi-icon')).toBeDefined();
  });

  it('should render the keyboard icon button', () => {
    render(<TopRightComponent />);
    userEvent.click(screen.getByLabelText('top-right-component'));

    expect(screen.getByLabelText('keyboard-icon-button')).toBeDefined();
  });

  it('should render the popover on clicking keyboard icon', () => {
    render(<TopRightComponent />);
    userEvent.click(screen.getByLabelText('keyboard-icon'));

    expect(screen.getByText('Other source inputs')).toBeDefined();
  });
});
