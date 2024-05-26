import { Outlet } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { modalSelector } from '@uiStore/selector';
import { ModalID, uiStore } from '@uiStore';

const Mac = () => {
  const { openModal } = uiStore(modalSelector);

  const openModalHandler = () => {
    openModal(ModalID.SEARCH, () => {});
  };
  return (
    <Box aria-label="mac-screen">
      <Button onClick={openModalHandler}>Open Modal</Button>
      <Outlet />
    </Box>
  );
};

export default Mac;
