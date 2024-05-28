import { StateCreator } from 'zustand';
import { ModalStateSlice, DateTimeSlice } from '../slice';

export interface UiStoreState {
  Modal: ModalStateSlice;
  DateTime: DateTimeSlice;
}

export type UiStoreSlice<T> = StateCreator<
  UiStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
