import { Outlet } from 'react-router-dom';
import { StaticHostProps } from './type';
import { Box } from '@chakra-ui/react';

const StaticHost = (props: StaticHostProps) => {
  return (
    <Box aria-label="static-host-screen">
      <Outlet />
    </Box>
  );
};

export default StaticHost;
