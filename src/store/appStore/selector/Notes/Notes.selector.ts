import { AppStoreState } from '../../appStore';

const notesSelector = (state: AppStoreState) => ({
  notes: state.Notes.notes,
  getCurrentId: () => Object.keys(state.Notes.notes).length,
  selectedNote: (id: string) => state.Notes.notes[id],
  addNote: state.Notes.addNote,
  deleteNote: state.Notes.deleteNote,
  editNote: state.Notes.editNote,
});

export { notesSelector };
