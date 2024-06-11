import { GithubState, appStore, githubSelector, useShallow } from '@appStore';
import { Box, Button } from '@chakra-ui/react';

const projectList = [
  {
    name: 'RaikwarAmit',
    project: 'raikwaramit',
  },
  {
    name: 'CryptoAtlas',
    project: 'CryptoAtlas',
  },
  {
    name: 'Courses',
    project: 'courses',
  },
  {
    name: 'Sorting visualizer',
    project: 'sorting_visualizer',
  },
  {
    name: 'Trackify',
    project: 'Trackify',
  },
  {
    name: 'React Markdown Demo',
    project: 'ReactMarkdownDemo',
  },
  {
    name: 'Authentication Firebase',
    project: 'AuthenticationFirebase',
  },
  {
    name: 'Some React Concepts',
    project: 'SomeReactConcepts',
  },
  {
    name: 'React Hooks',
    project: 'react_hooks',
  },
  {
    name: 'Room Database Module',
    project: 'RoomDatabaseModule',
  },
  {
    name: 'Location demo app',
    project: 'Location_demo_app',
  },
  {
    name: 'DSA Practice',
    project: 'DSA-Practice',
  },
  {
    name: 'Mini quiz app',
    project: 'Mini-quiz-app',
  },
];

const ProjectList2 = () => {
  const { setProject } = appStore(useShallow(githubSelector));

  const handleProject = (project: string) => {
    setProject(project as GithubState['project']);
  };
  return (
    <Box
      display={'flow'}
      flexDir={'column'}
      style={{ overflowY: 'scroll', height: '32vh' }}
    >
      {projectList.map((data) => (
        <Button
          padding={2}
          margin={1}
          key={data.name}
          onClick={() => {
            handleProject(data.project);
          }}
        >
          {data.name}
        </Button>
      ))}
    </Box>
  );
};

export default ProjectList2;
