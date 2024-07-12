import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import packageJson from '../../../../../package.json';

const AboutProject = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Heading as="h2" size="lg" color="white" textAlign="start" m={5}>
        {t('PowerScreen.sidebar.header')}
        <Text fontSize="sm">
          {t('PowerScreen.sidebar.version', {
            version: packageJson.version,
          })}
        </Text>
      </Heading>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        columnGap={'5'}
      >
        <Button
          as={Link}
          to={'https://github.com/onemanfighter/ar-mac-portfolio'}
          target="_blank"
          variant={'outline'}
          size={'sm'}
          colorScheme="yellow"
        >
          {t('PowerScreen.sidebar.button.starOnGithub')}
        </Button>
        <iframe
          src="https://github.com/sponsors/onemanfighter/button"
          title="Sponsor onemanfighter"
          height="32"
          width="114"
        ></iframe>
      </Box>
      <Text
        color="white"
        textAlign="start"
        fontSize="md"
        m={5}
        align={'justify'}
      >
        {t('PowerScreen.sidebar.aboutProject')}
      </Text>
    </Box>
  );
};

export default AboutProject;
