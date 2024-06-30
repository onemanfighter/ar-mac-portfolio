import { SearchItem } from 'src/components/Modal/Modals';
import AboutMe from './searchFiles/SearchData.json';
import Fuse, { IFuseOptions } from 'fuse.js';

const fuseOptions: IFuseOptions<SearchItem> = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ['title', 'author.firstName'],
};

const fuse = new Fuse(AboutMe, fuseOptions);

export default fuse;
