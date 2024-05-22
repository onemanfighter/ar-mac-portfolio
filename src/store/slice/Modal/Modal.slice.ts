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
    set((state) => {
      state.Modal.modalOpenState = ModalOpenState.CLOSE;
    });
    setTimeout(() => {
      set((state) => {
        state.Modal.modalOpenState = initialAlertState.modalOpenState;
      });
    }, 500 /* 0.5s */);
  },
});

export default createModalSlice;
