import { ModalID } from 'src/store/uiStore';

export type ModalProps = {
  modalID: ModalID;
  isOpen: boolean;
  onModalClose: () => void;
};
