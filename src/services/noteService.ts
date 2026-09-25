import axios from 'axios';
import type { FetchNotesResponse, Note, CreateNoteInput } from '../types/note';

const instance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api/notes',
});

instance.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchNotes = async (
  page: number,
  perPage: number,
  search: string = ''
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = { page, perPage };
  if (search.trim()) {
    params.search = search;
  }
  const { data } = await instance.get<FetchNotesResponse>('/', { params });
  return data;
};

export const createNote = async (note: CreateNoteInput): Promise<Note> => {
  const { data } = await instance.post<Note>('/', note);
  return data;
};

export const deleteNote = async (id: string): Promise<{ id: string }> => {
  await instance.delete(`/${id}`);
  return { id };
};
