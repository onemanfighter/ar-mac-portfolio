import { ProgramButton } from './components';
import { LaunchpadProgramsList } from './constants';
import { Box } from '@chakra-ui/react';

const Launchpad = () => {
  return (
    <Box
      aria-label="launchpad"
      position={'absolute'}
      zIndex={10}
      paddingX={64}
      padding={32}
      gap={4}
      width={'100vh'}
      height={'100vh'}
      display={'flex'}
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
  );
};

export default Launchpad;
