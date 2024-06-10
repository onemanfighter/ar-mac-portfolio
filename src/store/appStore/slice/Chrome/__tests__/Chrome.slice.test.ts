import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Chrome slice', () => {
  it('should return default chrome state', () => {
    renderHook(() => appStore());
    const { result } = renderHook(() => appStore());

    expect(result.current.Chrome.linkStack).toMatchSnapshot();
  });

  it('should add link to linkStack', () => {
    const { result } = renderHook(() => appStore());

    result.current.Chrome.addLinkStack('https://www.google.com/webhp?igu=1');

    expect(result.current.Chrome.linkStack).toMatchSnapshot();
  });

  it('should remove link from linkStack', () => {
    const { result } = renderHook(() => appStore());

    result.current.Chrome.addLinkStack('https://www.google.com/webhp?igu=1');
    result.current.Chrome.addLinkStack('https://www.google.com/webhp?igu=2');
    result.current.Chrome.removeLinkStack();

    expect(result.current.Chrome.linkStack).toMatchSnapshot();
  });

  it('should clear linkStack', () => {
    const { result } = renderHook(() => appStore());

    result.current.Chrome.addLinkStack('https://www.google.com/webhp?igu=1');
    result.current.Chrome.addLinkStack('https://www.google.com/webhp?igu=2');
    result.current.Chrome.clearLinkStack();

    expect(result.current.Chrome.linkStack).toMatchSnapshot();
  });
});
