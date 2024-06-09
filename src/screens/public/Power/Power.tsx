import { Box, IconButton, Text } from '@chakra-ui/react';
import { MacIcon, PowerIcon } from '@assets';
import { PowerProps } from './type';
import { processStore, powerSelector, useShallow } from '@processStore';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const Power = (props: PowerProps) => {
  const { t } = useTranslation();
  const { poweringOn } = processStore(useShallow(powerSelector));
  const powerClickHandler = () => {
    poweringOn();
  };

  return (
    <Box
      bg={'black'}
      display={'flex'}
      flex={1}
      alignItems={'center'}
      height={'100vh'}
      rowGap={50}
      aria-label="power-screen"
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <MacIcon />
      <Box>
        <IconButton
          aria-label="power-button"
          icon={<PowerIcon />}
          color={'white'}
          _hover={{ bg: 'white', color: 'black', transform: 'scale(1.1)' }}
          _active={{ bg: 'white', color: 'black', transform: 'scale(0.9)' }}
          transition={'all 0.5s'}
          variant={'outline'}
          onClick={powerClickHandler}
          size="lg"
        />
      </Box>
      <Box
        color={'white'}
        display={'flex'}
        flexDir={'row'}
        width={'100%'}
        maxHeight={5}
        justifyContent={'center'}
        alignItems={'center'}
        alignContent={'center'}
      >
        {_.toArray(t('PowerScreen.helpText')).map((character) => {
          return (
            <Text
              fontFamily={'mono'}
              key={character}
              _hover={{
                color: 'black',
                bg: 'white',
                fontFamily: 'mono',
                borderRadius: 'full',
                opacity: 0.8,
                padding: 2,
                fontSize: '2xl',
                transition: 'all 0s ease ',
                cursor: 'pointer',
              }}
            >
              {character === ' ' ? <>&nbsp;</> : character}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};

export default Power;
