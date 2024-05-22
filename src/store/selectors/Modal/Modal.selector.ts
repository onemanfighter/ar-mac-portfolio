import { AppStoreState } from '@store';

const modalSelector = (state: AppStoreState) => ({
  openState: state.Modal.modalOpenState,
  modalID: state.Modal.modalID,
  onModalClose: state.Modal.onModalClose,
  openModal: state.Modal.openModal,
  closeModal: state.Modal.closeModal,
});

export { modalSelector };
