import { ModalIDs } from '@store';

export type ModalProps = {
  modalID: ModalIDs;
  isOpen: boolean;
  onModalClose: () => void;
};
