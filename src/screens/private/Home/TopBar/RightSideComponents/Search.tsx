import { SearchIcon } from '@assets';
import { IconButton } from '@chakra-ui/react';

const Search = () => {
  return (
    <IconButton
      onClick={() => {}}
      height={'6'}
      aria-label="search-top-bar-button"
      icon={<SearchIcon width="1.2em" height="1.2em" color="white" />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: '#f0f0f06f' }}
      variant={'ghost'}
    />
  );
};

export default Search;
