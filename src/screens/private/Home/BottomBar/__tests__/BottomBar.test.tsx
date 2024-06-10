import { fireEvent, render, screen } from '@testing-library/react';
import BottomBar from '../BottomBar';
import { renderHook } from '@testing-library/react-hooks';
import { processStore } from '@processStore';
import { ProgramType } from '../components';

describe('BottomBar', () => {
  beforeEach(() => {
    const { result } = renderHook(() => processStore());
    result.current.ActiveApp.removeApp(ProgramType.FINDER);
    result.current.ActiveApp.removeApp(ProgramType.CHROME);
  });
  it('should render correctly to match snapshot', () => {
    const { container } = render(<BottomBar />);

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with props to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-finder'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(result.current.ActiveApp.Apps[ProgramType.FINDER]).toMatchSnapshot();
  });

  it('should render correctly finder app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-finder'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(result.current.ActiveApp.Apps[ProgramType.FINDER]).toMatchSnapshot();
  });

  it('should render correctly chrome app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-chrome'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(result.current.ActiveApp.Apps[ProgramType.CHROME]).toMatchSnapshot();
  });

  it('should render correctly spotify app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-spotify'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(
      result.current.ActiveApp.Apps[ProgramType.SPOTIFY],
    ).toMatchSnapshot();
  });

  it('should render correctly terminal app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-terminal'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(
      result.current.ActiveApp.Apps[ProgramType.TERMINAL],
    ).toMatchSnapshot();
  });

  it('should render correctly vscode app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-vscode'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(result.current.ActiveApp.Apps[ProgramType.VSCODE]).toMatchSnapshot();
  });

  it('should render correctly github app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-github'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(result.current.ActiveApp.Apps[ProgramType.GITHUB]).toMatchSnapshot();
  });

  it('should render correctly settings app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-settings'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(
      result.current.ActiveApp.Apps[ProgramType.SETTINGS],
    ).toMatchSnapshot();
  });

  it('should render correctly bin app to match snapshot', async () => {
    const { result } = renderHook(() => processStore());
    render(<BottomBar />);

    fireEvent.click(screen.getByLabelText('program-button-bin'));
    await jest.advanceTimersByTimeAsync(1000);

    expect(result.current.ActiveApp.Apps[ProgramType.BIN]).toMatchSnapshot();
  });
});
