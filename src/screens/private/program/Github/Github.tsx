import { appStore } from '@appStore';
import { GithubProps } from './type';
import { useShallow } from 'zustand/react/shallow';
import { githubSelector } from '@appStore/selector';

const Github = (props: GithubProps) => {
  const { currentProfile } = appStore(useShallow(githubSelector));
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      width="100%"
      height="100%"
      src="https://github.com/onemanfighter/"
    ></iframe>
  );
};

export default Github;
