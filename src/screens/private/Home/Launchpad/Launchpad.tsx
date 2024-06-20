import { WallpaperComponent } from '@components';
import { ProgramButton } from '../common';
import { LaunchpadProgramsList } from './constants';
import { Box } from '@chakra-ui/react';
import { settingsStore, useShallow, wallpaperSelector } from '@settingsStore';
import {
  WindowSize,
  activeAppActionsSelector,
  activeAppSelector,
  processStore,
} from '@processStore';

const Launchpad = () => {
  const { wallpaper } = settingsStore(useShallow(wallpaperSelector));
  const { getActiveApp, addApp, setWindowSize } = processStore(
    useShallow((state) => ({
      getActiveApp: activeAppSelector(state),
      ...activeAppActionsSelector(state),
    })),
  );

  return (
    <Box
      aria-label="launchpad"
      position={'absolute'}
      width={'100%'}
      height={'100%'}
    >
      <Box
        width={'100vw'}
        height={'100vh'}
        position={'absolute'}
        zIndex={900}
        filter={'blur(10px) grayscale(0.2) brightness(0.5)'}
      >
        <WallpaperComponent id={wallpaper} />
      </Box>
      <Box
        height={'85%'}
        top={7}
        position={'absolute'}
        zIndex={1001}
        overflow={'auto'}
      >
        <Box
          px={24}
          pt={16}
          rowGap={20}
          columnGap={24}
          display={'flex'}
          flexWrap={'wrap'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
        >
          {Object.values(LaunchpadProgramsList).map((program, index) => {
            const currentApp = getActiveApp(program.programType);
            return (
              <ProgramButton
                key={index}
                name={program.name}
                icon={program.icon}
                isActive={false}
                onClickHandler={() => {
                  !currentApp
                    ? setTimeout(() => {
                        addApp(program.programType);
                      }, 500)
                    : setWindowSize(program.programType, WindowSize.DEFAULT);
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Launchpad;
