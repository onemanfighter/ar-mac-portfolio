import { SearchIcon } from '@assets';
import { Menu } from '@chakra-ui/react';
import { TopBarButton } from '@components';

const Search = () => {
  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="search-top-bar-button"
        icon={<SearchIcon width="1.5em" height="1.5em" color="white" />}
      />
    </Menu>
  );
};

export default Search;
