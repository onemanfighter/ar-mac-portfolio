import { appStore, githubSelector, useShallow } from '@appStore';
import { GithubProps } from './type';

const Github = (props: GithubProps) => {
  const { currentProfile } = appStore(useShallow(githubSelector));
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      aria-label="github"
      width="100%"
      height="100%"
      src="https://github1s.com/onemanfighter/ar-mac-portfolio"
    ></iframe>
  );
};

export default Github;
