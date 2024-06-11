import { renderHook } from '@testing-library/react-hooks';
import { appStore, githubSelector } from '@appStore';

describe('Github selector', () => {
  it('should return default github state', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    expect(result.current).toMatchSnapshot();
  });

  it('should return current profile', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    expect(result.current.currentProfile).toBe('onemanfighter');
  });

  it('should return default profile', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    expect(result.current.defaultProfile).toBe('onemanfighter');
  });

  it('should return project', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    expect(result.current.getCurrentProject()).toBe(
      'https://onemanfighter.github.io/onemanfighter',
    );
  });

  it('should set project', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    result.current.setProject('ar-mac-portfolio');

    expect(result.current.getCurrentProject()).toBe(
      'https://onemanfighter.github.io/ar-mac-portfolio',
    );
  });

  it('should set current profile', () => {
    const { result } = renderHook(() => appStore(githubSelector));

    result.current.resetCurrentProfile();

    expect(result.current.currentProfile).toBe('onemanfighter');
  });
});
