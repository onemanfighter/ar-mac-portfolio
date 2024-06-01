import { ButtonGroup } from '@chakra-ui/react';
import { Apple } from './LeftSideComponents';

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
    </ButtonGroup>
  );
};

export default LeftSideIcons;
