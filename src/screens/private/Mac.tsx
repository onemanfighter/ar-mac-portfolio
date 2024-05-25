import { Button } from '@chakra-ui/react';
import { modalSelector, useShallow } from '@uiStore/selector';
import { ModalID, uiStore } from '@uiStore';
import { Outlet } from 'react-router-dom';

const Mac = () => {
  const { openModal } = uiStore(useShallow(modalSelector));

  const openModalHandler = () => {
    openModal(ModalID.SEARCH, () => {});
  };
  return (
    <>
      <div>Screen</div>
      <Button onClick={openModalHandler}>Open Modal</Button>
      <Outlet />
    </>
  );
};

export default Mac;
