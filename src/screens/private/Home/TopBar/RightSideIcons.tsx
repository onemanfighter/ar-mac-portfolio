import { ButtonGroup } from '@chakra-ui/react';
import {
  Battery,
  DateTimeDrawer,
  Monitor,
  Settings,
  User,
  Wifi,
  Search,
} from './RightSideComponents';

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
      <Search />
      <Settings />
      <DateTimeDrawer />
    </ButtonGroup>
  );
};

export default RightSideIcons;
