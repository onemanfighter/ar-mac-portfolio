import { StateCreator } from 'zustand';
import { ModalStateSlice } from '../slice';

export interface AppStoreState {
  Modal: ModalStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
