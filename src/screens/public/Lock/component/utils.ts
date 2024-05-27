import { DAY_MAP } from './constants';

export const formatDate = (date: string) => {
  return DAY_MAP[date.slice(0, 3)] + date.slice(3);
};
