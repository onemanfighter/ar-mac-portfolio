import { ButtonGroup } from '@chakra-ui/react';
import { Battery, DateTimeDrawer, Monitor, User, Wifi } from './Components';

const RightSideIcons = () => {
  return (
    <ButtonGroup
      width={'50%'}
      display={'flex'}
      flexDir={'row'}
      justifyContent={'flex-end'}
      marginRight={2}
    >
      <Monitor />
      <User />
      <Battery />
      <Wifi />
      <DateTimeDrawer />
    </ButtonGroup>
  );
};

export default RightSideIcons;
