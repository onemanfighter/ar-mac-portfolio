import { Box } from '@chakra-ui/react';
import { HomeProps } from './type';
import { WallpaperComponent } from '@components';
import { settingsStore } from '@settingsStore';
import { wallpaperSelector } from '@settingsStore/selector';
import { TopBar } from './TopBar';

const Home = (props: HomeProps) => {
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
      <TopBar />
    </Box>
  );
};

export default Home;
