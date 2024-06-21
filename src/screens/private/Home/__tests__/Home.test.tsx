import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { uiStore } from '@uiStore';
import { settingsStore } from '@settingsStore';
import Home from '../Home';
import { ProgramType, processStore } from '@processStore';
import { appStore } from '@appStore';
import { act } from 'react';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('Home', () => {
  it('should render correctly to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with apps to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    renderHook(() => processStore());

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with finder app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.FINDER);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.FINDER);
    });
  });

  it('should render correctly with calendar app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.CALENDAR);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.CALENDAR);
    });
  });

  it('should render correctly with chrome app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.CHROME);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.CHROME);
    });
  });

  it('should render correctly with vscode app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.VSCODE);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.VSCODE);
    });
  });

  it('should render correctly with terminal app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.TERMINAL);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.TERMINAL);
    });
  });

  it('should render correctly with spotify app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.SPOTIFY);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.SPOTIFY);
    });
  });

  it('should render correctly with github app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.GITHUB);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.GITHUB);
    });
  });

  it('should render correctly with settings app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.SETTINGS);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.SETTINGS);
    });
  });

  it('should render correctly with bin app to match snapshot', () => {
    renderHook(() => settingsStore());
    renderHook(() => uiStore());
    renderHook(() => appStore());
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.BIN);
    });

    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();

    // cleanup
    act(() => {
      result.current.ActiveApp.removeApp(ProgramType.BIN);
    });
  });
});
