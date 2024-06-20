import { BottomBarProgramType } from '../components';
import { ProgramItem } from '../type';
import { reorder } from '../utils';

const dummyData: ProgramItem[] = [
  {
    type: BottomBarProgramType.SPOTIFY,
    name: 'Spotify',
    id: '1',
  },
  {
    type: BottomBarProgramType.CHROME,
    name: 'Chrome',
    id: '2',
  },
  {
    type: BottomBarProgramType.FINDER,
    name: 'Finder',
    id: '3',
  },
  {
    type: BottomBarProgramType.GITHUB,
    name: 'Github',
    id: '4',
  },
];

describe('utils', () => {
  it('should correctly reorder the array', () => {
    const data = reorder(dummyData, 0, 4);

    expect(data).toEqual([
      {
        type: BottomBarProgramType.CHROME,
        name: 'Chrome',
        id: '2',
      },
      {
        type: BottomBarProgramType.FINDER,
        name: 'Finder',
        id: '3',
      },
      {
        type: BottomBarProgramType.GITHUB,
        name: 'Github',
        id: '4',
      },
      {
        type: BottomBarProgramType.SPOTIFY,
        name: 'Spotify',
        id: '1',
      },
    ]);
  });
});
