export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface CreateNoteInput {
  title: string;
  content: string;
  tag: NoteTag;
}