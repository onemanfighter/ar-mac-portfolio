import { Box } from '@chakra-ui/react';
import { HomeProps } from './type';
import { WallpaperComponent, Window } from '@components';
import { settingsStore, wallpaperSelector } from '@settingsStore';
import { TopBar } from './TopBar';
import { LazySpotifyComponent } from '@router';
import { BottomBar } from './BottomBar';

const Home = (props: HomeProps) => {
  const { wallpaper } = settingsStore(wallpaperSelector);

  return (
    <Box aria-label="home" width={'100vw'} height={'100vh'}>
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
      <Window children={<LazySpotifyComponent />} />
      <BottomBar />
    </Box>
  );
};

export default Home;
