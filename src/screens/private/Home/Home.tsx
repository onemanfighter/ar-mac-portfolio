import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { HomeProps } from './type';
import { WallpaperComponent, Window } from '@components';
import { settingsStore, useShallow, wallpaperSelector } from '@settingsStore';
import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';
import {
  ProgramType,
  processStore,
  activeAppSelector,
  WindowSize,
} from '@processStore';
import { Launchpad } from './Launchpad';
import { LaunchpadContext } from '../Mac';
import WindowAppMap from './AppMap';

const Home = (props: HomeProps) => {
  const { launchpad } = useContext(LaunchpadContext);
  const { wallpaper } = settingsStore(useShallow(wallpaperSelector));
  const activeApp = processStore(useShallow(activeAppSelector));

  const shouldShowAppWindow = (app: ProgramType) =>
    activeApp(app) !== undefined && activeApp(app)?.size !== WindowSize.HIDE;
  return (
    <Box aria-label="home" width={'100vw'} height={'100vh'}>
      <Box width={'100vw'} height={'100vh'} position={'absolute'} zIndex={-10}>
        <WallpaperComponent id={wallpaper} />
      </Box>
      <Box
        width={'100vw'}
        height={7}
        top={0}
        position={'absolute'}
        zIndex={1000}
        bg={'black'}
      >
        <TopBar />
      </Box>
      <Box
        width={'100vw'}
        height={'10vh'}
        position={'absolute'}
        bottom={0}
        zIndex={950}
      >
        <BottomBar />
      </Box>

      {launchpad ? (
        <Launchpad />
      ) : (
        <Box
          width={'100vw'}
          height={'100vh'}
          position={'absolute'}
          zIndex={800}
        >
          {Object.values(ProgramType).map((app) => {
            return (
              shouldShowAppWindow(app) && (
                <Window
                  key={app}
                  app={app}
                  children={WindowAppMap[app as ProgramType] ?? null}
                />
              )
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Home;
