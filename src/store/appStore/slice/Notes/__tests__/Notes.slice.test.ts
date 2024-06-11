import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';

describe('Notes slice', () => {
  it('should return default notes state', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Notes.notes).toEqual({});
  });

  it('should add note', () => {
    const { result } = renderHook(() => appStore());

    result.current.Notes.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    expect(result.current.Notes.notes['1']).toEqual({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });
  });

  it('should delete note', () => {
    const { result } = renderHook(() => appStore());

    result.current.Notes.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    result.current.Notes.deleteNote('1');

    expect(result.current.Notes.notes['1']).toBeUndefined();
  });

  it('should edit note', () => {
    const { result } = renderHook(() => appStore());

    result.current.Notes.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    result.current.Notes.editNote({
      id: '1',
      title: 'New Title',
      description: 'New Description',
      date: '2021-09-02',
    });

    expect(result.current.Notes.notes['1']).toEqual({
      id: '1',
      title: 'New Title',
      description: 'New Description',
      date: '2021-09-02',
    });
  });
});
