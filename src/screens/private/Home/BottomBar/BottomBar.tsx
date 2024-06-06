import { Box } from '@chakra-ui/react';
import { BottomBarProps } from './type';
import { ProgramButton, ProgramType } from './components';

const BottomBar = (props: BottomBarProps) => {
  return (
    <Box
      aria-label="bottom-bar"
      w={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignContent={'center'}
      alignItems={'center'}
    >
      <Box
        display={'flex'}
        height={'auto'}
        p={1}
        my={1}
        mx={'auto'}
        position={'fixed'}
        borderRadius={'2xl'}
        alignItems={'center'}
        transform={{
          sm: 'scale(0.8)',
          md: 'scale(0.9)',
          lg: 'scale(1)',
          xl: 'scale(1)',
          '2xl': 'scale(1)',
        }}
        transition={'all 0.3s ease-in-out'}
        bg={'#1f1f1f6f'}
        border={'1px solid gray'}
        dropShadow={'md'}
        bottom={0}
        style={{ backdropFilter: 'blur(6px)' }}
        zIndex={10}
        gap={4}
      >
        {Object.values(ProgramType).map((program) => {
          return <ProgramButton type={program} key={program} />;
        })}
      </Box>
    </Box>
  );
};

export default BottomBar;
