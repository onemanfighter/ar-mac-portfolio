import { ProgramType } from '@processStore';
import { ProgramItem } from './type';

export const reorder = (
  list: ProgramItem[],
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const getAllAppOtherThanBottomBarApps = (
  apps: (ProgramType | undefined)[],
) => {
  return apps.filter(
    (app) =>
      !(
        app === ProgramType.FINDER ||
        app === ProgramType.SETTINGS ||
        app === ProgramType.LAUNCHPAD ||
        app === ProgramType.NOTES ||
        app === ProgramType.CHROME ||
        app === ProgramType.VSCODE ||
        app === ProgramType.TERMINAL ||
        app === ProgramType.SPOTIFY ||
        app === ProgramType.GITHUB ||
        app === ProgramType.BIN
      ) && app !== undefined,
  ) as ProgramType[];
};
