import { Box } from '@chakra-ui/react';
import {
  activeAppRunningSelector,
  processStore,
  useShallow,
} from '@processStore';
import { MenuBranch } from './component';
import { TopAppBarAppMenuDatMap } from './constants';

const TopAppBarAppMenu = () => {
  const { activeAppRunning } = processStore(
    useShallow(activeAppRunningSelector),
  );

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      alignItems={'center'}
    >
      {Object.values(TopAppBarAppMenuDatMap[activeAppRunning].menuTree).map(
        (app, index) => {
          return (
            <MenuBranch
              key={index + '-' + app}
              title={app.title}
              type={app.type}
              items={app.items}
            />
          );
        },
      )}
    </Box>
  );
};

export default TopAppBarAppMenu;
