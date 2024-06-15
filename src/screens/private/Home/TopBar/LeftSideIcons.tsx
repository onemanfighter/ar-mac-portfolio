import { ButtonGroup } from '@chakra-ui/react';
import { Apple } from './LeftSideComponents';
import { TopAppBarAppMenu } from './LeftSideComponents/TopAppBarAppMenu';

const LeftSideIcons = () => {
  return (
    <ButtonGroup
      width={'50%'}
      display={'flex'}
      flexDir={'row'}
      justifyContent={'flex-start'}
      marginRight={2}
    >
      <Apple />
      <TopAppBarAppMenu />
    </ButtonGroup>
  );
};

export default LeftSideIcons;
