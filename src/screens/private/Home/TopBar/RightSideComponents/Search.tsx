import { SearchIcon } from '@assets';
import { IconButton } from '@chakra-ui/react';
import {
  darkModeColorSelector,
  settingsStore,
  useShallow,
} from '@settingsStore';
import { ModalID, modalSelector, uiStore } from '@uiStore';

const Search = () => {
  const { iconColor } = settingsStore(useShallow(darkModeColorSelector));
  const { openModal } = uiStore(useShallow(modalSelector));

  return (
    <IconButton
      onClick={() => {
        openModal(ModalID.SEARCH, () => {});
      }}
      height={'7'}
      aria-label="search-top-bar-button"
      icon={<SearchIcon width="1.2em" height="1.2em" color={iconColor} />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: '#f0f0f06f' }}
      variant={'ghost'}
    />
  );
};

export default Search;
