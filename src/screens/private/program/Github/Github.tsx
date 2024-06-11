/* eslint-disable jsx-a11y/iframe-has-title */
import { appStore, githubSelector, useShallow } from '@appStore';
import { GithubProps } from './type';
import {
  Avatar,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { darkModeColorSelector, settingsStore } from '@settingsStore';
import { ProjectList1, ProjectList2 } from './components';

const Github = (props: GithubProps) => {
  const { getCurrentProject, setCurrentProfile } = appStore(
    useShallow(githubSelector),
  );
  const { textColor, mainColor } = settingsStore(
    useShallow(darkModeColorSelector),
  );
  return (
    <Box width={'100%'} height={'100%'} display={'flex'}>
      <Box width={'30%'} height={'100%'} color={textColor} bg={mainColor}>
        <Tabs
          onChange={(e: any) => {
            if (e === 0) {
              setCurrentProfile('onemanfighter');
            }
            if (e === 1) {
              setCurrentProfile('raikwaramit');
            }
          }}
        >
          <TabList>
            <Tab width={'50%'} aria-label="one-man-fighter-tab">
              OneManFighter
            </Tab>
            <Tab width={'50%'} aria-label="raikwar-amit-tab">
              RaikwarAmit
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel height={'100%'}>
              <Box display={'flex'} justifyContent={'center'}>
                <Avatar
                  name="Amit Raikwar"
                  size={'2xl'}
                  border={'2px solid white'}
                  src="https://avatars.githubusercontent.com/u/149316922?v=4"
                />
              </Box>
              <ProjectList1 />
            </TabPanel>
            <TabPanel height={'100%'}>
              <Box display={'flex'} justifyContent={'center'}>
                <Avatar
                  name="Amit Raikwar"
                  size={'2xl'}
                  border={'2px solid white'}
                  src="https://avatars.githubusercontent.com/u/104697219?v=4"
                />
              </Box>
              <ProjectList2 />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <iframe
        aria-label="github"
        width="100%"
        style={{ backgroundColor: mainColor }}
        height="100%"
        src={getCurrentProject()}
      ></iframe>
    </Box>
  );
};

export default Github;
