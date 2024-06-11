export type Note = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type NotesState = {
  notes: Record<string, Note>;
};

export interface NotesAppAction {
  addNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  editNote: (note: Note) => void;
}

export type NotesStateSlice = NotesState & NotesAppAction;
