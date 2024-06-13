import { renderHook } from '@testing-library/react-hooks';
import { appStore } from '../../../appStore';
import { notesSelector } from '../Notes.selector';

describe('Notes selector', () => {
  it('should return default notes state', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    expect(result.current.notes).toEqual({});
  });

  it('should return default current id', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    expect(result.current.getCurrentId()).toBe(0);
  });

  it('should add note', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    result.current.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    expect(result.current.selectedNote('1')).toEqual({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });
  });

  it('should delete note', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    result.current.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    result.current.deleteNote('1');

    expect(result.current.selectedNote('1')).toBeUndefined();
  });

  it('should edit note', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    result.current.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    result.current.editNote({
      id: '1',
      title: 'New Title',
      description: 'New Description',
      date: '2021-09-02',
    });

    expect(result.current.selectedNote('1')).toEqual({
      id: '1',
      title: 'New Title',
      description: 'New Description',
      date: '2021-09-02',
    });
  });

  it('should return selected note', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    result.current.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    expect(result.current.selectedNote('1')).toEqual({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });
  });

  it('should return all notes', () => {
    const { result } = renderHook(() => appStore(notesSelector));

    result.current.addNote({
      id: '1',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    result.current.addNote({
      id: '2',
      title: 'Title',
      description: 'Description',
      date: '2021-09-01',
    });

    expect(result.current.notes).toEqual({
      '1': {
        id: '1',
        title: 'Title',
        description: 'Description',
        date: '2021-09-01',
      },
      '2': {
        id: '2',
        title: 'Title',
        description: 'Description',
        date: '2021-09-01',
      },
    });
  });
});
