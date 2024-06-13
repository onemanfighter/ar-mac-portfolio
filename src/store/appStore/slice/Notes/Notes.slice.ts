import { AppStoreSlice } from '../../appStore';
import { NotesState, NotesStateSlice } from './types';

const defaultNotesState: NotesState = {
  notes: {},
};

const createNotesSlice: AppStoreSlice<NotesStateSlice> = (set) => ({
  ...defaultNotesState,
  addNote: (note) =>
    set((state) => {
      state.Notes.notes[note.id] = note;
    }),
  deleteNote: (id) =>
    set((state) => {
      delete state.Notes.notes[id];
    }),
  editNote: (newNote) =>
    set((state) => {
      state.Notes.notes[newNote.id] = newNote;
    }),
});

export default createNotesSlice;
