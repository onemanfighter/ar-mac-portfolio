import { WifiIcon } from '@assets';
import { Menu } from '@chakra-ui/react';
import { TopBarButton } from '@components';

const Wifi = () => {
  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="wifi-top-bar-button"
        icon={<WifiIcon width="1.5em" height="1.5em" color="white" />}
      />
    </Menu>
  );
};

export default Wifi;
