import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { notesSelector } from '../Notes.selector';

describe('Notes selector', () => {
  it('should return default notes state', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    expect(result.current).toEqual({});
  });
});
