import { Outlet } from 'react-router-dom';
import { StaticHostProps } from './type';
import { Box } from '@chakra-ui/react';

const StaticHost = (props: StaticHostProps) => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default StaticHost;
