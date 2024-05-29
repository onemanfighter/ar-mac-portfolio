import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { UiStoreState } from './types';
import { createModalSlice } from '../slice/Modal';
import { createDateTimeSlice } from '../slice';

export const uiStore = create<UiStoreState>()(
  immer((...api) => ({
    Modal: createModalSlice(...api),
    DateTime: createDateTimeSlice(...api),
  })),
);
