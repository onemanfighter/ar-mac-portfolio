import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { chromeSelector } from '../Chrome.selector';

describe('Chrome selector', () => {
  it('should return default chrome state', () => {
    const { result } = renderHook(() => appStore(chromeSelector));

    expect(result.current.linkStack).toEqual([
      'http://www.google.com/webhp?igu=1',
    ]);
  });

  it('should add link to linkStack', () => {
    const { result } = renderHook(() => appStore(chromeSelector));

    result.current.addLinkStack('abc');

    expect(result.current.linkStack).toEqual([
      'http://www.google.com/webhp?igu=1',
      'abc',
    ]);
  });

  it('should remove link from linkStack', () => {
    const { result } = renderHook(() => appStore(chromeSelector));

    result.current.addLinkStack('abc');
    result.current.popLinkStack();

    expect(result.current.linkStack).toEqual([
      'http://www.google.com/webhp?igu=1',
    ]);
  });

  it('should clear linkStack', () => {
    const { result } = renderHook(() => appStore(chromeSelector));

    result.current.addLinkStack('abc');
    result.current.addLinkStack('efg');
    result.current.clearLinkStack();

    expect(result.current.linkStack).toEqual([
      'http://www.google.com/webhp?igu=1',
    ]);
  });
});
