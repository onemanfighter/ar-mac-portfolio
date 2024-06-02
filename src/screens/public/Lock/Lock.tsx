import { Box } from '@chakra-ui/react';
import { LockProps } from './type';
import { WallpaperComponent } from '@components';
import { settingsStore, wallpaperSelector } from '@settingsStore';

import {
  TimeDateComponent,
  TopRightComponent,
  UserLoginComponent,
} from './component';

const Lock = (props: LockProps) => {
  const { wallpaper } = settingsStore(wallpaperSelector);

  return (
    <Box>
      <Box
        width={'100vw'}
        height={'100vh'}
        position={'absolute'}
        top={0}
        left={0}
        zIndex={-10}
      >
        <WallpaperComponent id={wallpaper} />
      </Box>
      <TopRightComponent />
      <TimeDateComponent />
      <UserLoginComponent />
    </Box>
  );
};

export default Lock;
