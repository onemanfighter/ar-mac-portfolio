import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { ModalProps } from './types';
import { SearchModal } from './Modals';
import { ModalID } from '@uiStore';

const ModalToShow = ({ modalID }: { modalID: ModalID }) => {
  switch (modalID) {
    case ModalID.SEARCH:
      return <SearchModal />;
    default:
      return <></>;
  }
};

const ModalComponent = ({ isOpen, modalID, onModalClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalToShow modalID={modalID} />
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
