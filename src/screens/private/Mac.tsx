import { Outlet } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { modalSelector, useShallow } from '@uiStore/selector';
import { ModalID, uiStore } from '@uiStore';

const Mac = () => {
  const { openModal } = uiStore(useShallow(modalSelector));

  const openModalHandler = () => {
    openModal(ModalID.SEARCH, () => {});
  };
  return (
    <>
      <div>MacScreen</div>
      <Button onClick={openModalHandler}>Open Modal</Button>
      <Outlet />
    </>
  );
};

export default Mac;
