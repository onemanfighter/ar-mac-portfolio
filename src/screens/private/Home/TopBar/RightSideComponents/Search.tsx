import { SearchIcon } from '@assets';
import { IconButton } from '@chakra-ui/react';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';

const Search = () => {
  const { iconColor } = settingsStore(useShallow(darkModeColorSelector));

  return (
    <IconButton
      onClick={() => {}}
      height={'6'}
      aria-label="search-top-bar-button"
      icon={<SearchIcon width="1.2em" height="1.2em" color={iconColor} />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: '#f0f0f06f' }}
      variant={'ghost'}
    />
  );
};

export default Search;
