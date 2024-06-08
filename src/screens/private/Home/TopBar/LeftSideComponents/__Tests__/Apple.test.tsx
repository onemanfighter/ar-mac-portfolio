import { fireEvent, render, screen } from '@testing-library/react';
import Apple from '../Apple';

describe('Apple', () => {
  it('Should render apple button correctly', () => {
    const { container } = render(<Apple />);

    expect(container).toMatchSnapshot();
  });

  it('Should render apple menu correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));

    expect(container).toMatchSnapshot();
  });

  it('Should render about this mac correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('about-this-mac'));

    expect(container).toMatchSnapshot();
  });

  it('Should render system settings correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('system-settings'));

    expect(container).toMatchSnapshot();
  });

  it('Should render app store correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('app-store'));

    expect(container).toMatchSnapshot();
  });

  it('Should render recent items correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('recent-items'));

    expect(container).toMatchSnapshot();
  });

  it('Should render force quit correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('force-quit'));

    expect(container).toMatchSnapshot();
  });

  it('Should render sleep correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('sleep'));

    expect(container).toMatchSnapshot();
  });

  it('Should render restart correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('restart'));

    expect(container).toMatchSnapshot();
  });

  it('Should render shut down correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('shutDown'));

    expect(container).toMatchSnapshot();
  });

  it('Should render lock screen correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('lock-screen'));

    expect(container).toMatchSnapshot();
  });

  it('Should render log out correctly', () => {
    const { container } = render(<Apple />);

    fireEvent.click(screen.getByLabelText('apple-top-bar-button'));
    fireEvent.click(screen.getByLabelText('logout'));

    expect(container).toMatchSnapshot();
  });
});
