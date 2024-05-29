import { Box, Text } from '@chakra-ui/react';
import { TopBarProps } from './type';
import RightSideIcons from './RightSideIcons';

const TopBar = (props: TopBarProps) => {
  return (
    <Box
      width={'100%'}
      height={7}
      bg={'#000000af'}
      position={'fixed'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignContent={'center'}
      alignItems={'center'}
      zIndex={100}
      top={0}
    >
      <Box width={'50%'} flexDir={'row'} justifyContent={'flex-start'} gap={2}>
        {/** Left side icons */}
        <Text color={'white'}>Left side icons</Text>
      </Box>
      <RightSideIcons />
    </Box>
  );
};

export default TopBar;
