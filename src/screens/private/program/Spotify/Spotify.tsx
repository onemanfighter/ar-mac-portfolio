import { IndianArtist, appStore } from '@appStore';
import { SpotifyProps } from './type';
import { useShallow } from 'zustand/react/shallow';
import { spotifySelector } from '@appStore/selector';
import { Box, IconButton } from '@chakra-ui/react';
import { BackIcon } from '@assets';

const Spotify = (props: SpotifyProps) => {
  const { state, getCurrentPlaylist, closePlaylist, openPlaylist } =
    appStore(spotifySelector);

  const a = appStore();

  const currentList = getCurrentPlaylist();

  return (
    <Box width={'100%'} height={'100%'}>
      <Box
        width={'100%'}
        height={8}
        border={state === 'playing' ? '1px solid #1DB954' : '1px solid #000000'}
        display="flex"
        justifyContent={'center'}
        alignItems={'center'}
        color="white"
        columnGap={2}
      >
        <IconButton
          aria-label="back"
          size={'xs'}
          icon={<BackIcon color="white" width={24} height={24} />}
          _active={{
            transform: 'scale(0.9)',
          }}
          colorScheme="white"
          onClick={() => {
            console.log('closePlaylist');
            closePlaylist();
          }}
          // isDisabled={state === 'main'}
        />
        {currentList?.name}
      </Box>

      {state === 'playing' ? (
        <iframe
          title={currentList?.name}
          src={currentList?.url}
          width={'100%'}
          height={'100%'}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default Spotify;
