import { warn } from 'console';
import { AppStoreSlice } from '../../appStore/types';
import { ModalState, ModalStateSlice, ModalOpenState, ModalIDs } from './types';

const initialAlertState: ModalState = {
  modalID: undefined,
  onModalClose: undefined,
  modalOpenState: ModalOpenState.CLOSE,
};

const createModalSlice: AppStoreSlice<ModalStateSlice> = (set) => ({
  ...initialAlertState,
  openModal: (modalData) => {
    set((state) => {
      state.Modal.modalID = modalData.modalID;
      state.Modal.onModalClose = modalData.onModalClose;
      state.Modal.modalOpenState = ModalOpenState.OPEN;
    });
  },
  closeModal: () => {
    setTimeout(() => {
      set((state) => {
        console.warn('This is a warning message');
        state.Modal.modalID = initialAlertState.modalID;
        state.Modal.onModalClose = initialAlertState.onModalClose;
      });
    }, 500);
    set((state) => {
      state.Modal.modalOpenState = ModalOpenState.CLOSE;
    });
  },
});

export default createModalSlice;
