import { WallpaperComponent } from '@components';
import { ProgramButton } from './components';
import { LaunchpadProgramsList } from './constants';
import { Box } from '@chakra-ui/react';
import { settingsStore, useShallow, wallpaperSelector } from '@settingsStore';

const Launchpad = () => {
  const { wallpaper } = settingsStore(useShallow(wallpaperSelector));

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
      <Box height={'85%'} position={'absolute'} zIndex={1001} overflow={'auto'}>
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
          {LaunchpadProgramsList.map((program, index) => {
            return (
              <ProgramButton
                key={index}
                name={program.name}
                icon={program.icon}
                isActive={false}
                onClickHandler={() => {}}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Launchpad;
