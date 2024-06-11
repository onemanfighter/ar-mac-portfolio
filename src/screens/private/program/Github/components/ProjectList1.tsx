import { GithubState, appStore, githubSelector } from '@appStore';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { useShallow } from 'zustand/react/shallow';

const projectList = [
  {
    name: 'OneManFighter',
    project: 'onemanfighter',
  },
  {
    name: 'Ar Mac Portfolio',
    project: 'ar-mac-portfolio',
  },
];

const ProjectList1 = () => {
  const { setProject } = appStore(useShallow(githubSelector));

  const handleProject = (project: string) => {
    setProject(project as GithubState['project']);
  };

  return (
    <Box
      display={'flow'}
      flexDir={'column'}
      scrollBehavior={'smooth'}
      padding={2}
      style={{ overflowY: 'scroll', height: '100%' }}
    >
      {projectList.map((data) => (
        <Button
          key={data.project}
          padding={2}
          margin={1}
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

export default ProjectList1;
