import { AppStoreSlice } from '../../appStore';
import { NotesState, NotesStateSlice } from './types';

const defaultNotesState: NotesState = {};

const createNotesSlice: AppStoreSlice<NotesStateSlice> = (set) => ({
  ...defaultNotesState,
});

export default createNotesSlice;
