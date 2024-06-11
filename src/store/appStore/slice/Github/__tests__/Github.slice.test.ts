import { act, renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Github slice', () => {
  it('should return default github state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Github).toMatchSnapshot();
  });

  it('should return current profile', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Github.currentProfile).toBe('onemanfighter');
  });

  it('should set current profile', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Github.setCurrentProfile('github');
    });

    expect(result.current.Github.currentProfile).toBe('github');
  });

  it('should set project', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Github.setProject('ar-mac-portfolio');
    });

    expect(result.current.Github.project).toBe('ar-mac-portfolio');
  });

  it('should reset current profile', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Github.resetCurrentProfile();
    });

    expect(result.current.Github.currentProfile).toBe('onemanfighter');
  });
});
