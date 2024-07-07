import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MediumIcon,
  YoutubeIcon,
} from '@assets';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SocialButtons = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text
        color={'white'}
        textAlign={'center'}
        fontSize={'sm'}
        pos={'absolute'}
        align={'center'}
        bottom={32}
        left={'22%'}
      >
        {t('PowerScreen.sidebar.socialLinks.title')}
      </Text>
      <Box position={'absolute'} bottom={20} paddingX={3}>
        <IconButton
          variant="outline"
          color="white"
          _hover={{
            bg: 'white',
            color: 'blue',
          }}
          marginLeft={4}
          mx={2}
          as={Link}
          to={'https://in.linkedin.com/in/amitrai1603'}
          target="_blank"
          transition={'all 0.5s'}
          icon={<LinkedInIcon />}
          aria-label="linkedin"
        />
        <IconButton
          variant="outline"
          color="white"
          as={Link}
          to={'https://github.com/onemanfighter'}
          target="_blank"
          _hover={{
            bg: 'white',
            color: 'black',
          }}
          mx={2}
          transition={'all 0.5s'}
          icon={<GithubIcon />}
          aria-label="github"
        />
        <IconButton
          variant="outline"
          color="white"
          as={Link}
          to={'https://amitraikwar.medium.com/'}
          target="_blank"
          _hover={{
            bg: 'white',
            color: 'black',
          }}
          mx={2}
          transition={'all 0.5s'}
          icon={<MediumIcon />}
          aria-label="medium"
        />
        <IconButton
          variant="outline"
          color="white"
          as={Link}
          to={'https://www.youtube.com/'}
          target="_blank"
          _hover={{
            bg: 'white',
            color: 'red',
          }}
          mx={2}
          transition={'all 0.5s'}
          icon={<YoutubeIcon />}
          aria-label="youtube"
        />
        <IconButton
          variant="outline"
          color="white"
          _hover={{
            bg: 'white',
            color: 'pink.500',
          }}
          mx={3}
          transition={'all 0.5s'}
          icon={<InstagramIcon />}
          aria-label="instagram"
        />
      </Box>
      <Text
        color={'white'}
        textAlign={'center'}
        fontSize={'sm'}
        pos={'absolute'}
        align={'center'}
        bottom={8}
        left={'20%'}
      >
        {t('PowerScreen.sidebar.bottomText')}
      </Text>
      <Text
        color={'white'}
        textAlign={'center'}
        fontSize={'sm'}
        pos={'absolute'}
        align={'center'}
        bottom={1}
        left={'8%'}
      >
        {t('PowerScreen.sidebar.copyRight')}
      </Text>
    </>
  );
};

export default SocialButtons;
