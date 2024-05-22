export enum ModalIDs {
  NONE = 'none',
  SEARCH = 'search',
}

export type ModalState = {
  modalID?: ModalIDs;
  onModalClose?: () => void;
  modalOpenState: ModalOpenState;
};

export enum ModalOpenState {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export interface ModalStateAction {
  openModal: (modalData: ModalState) => void;
  closeModal: () => void;
}

export type ModalStateSlice = ModalState & ModalStateAction;
