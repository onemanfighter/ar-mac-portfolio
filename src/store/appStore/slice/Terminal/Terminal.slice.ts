import { AppStoreSlice } from '../../appStore';
import { TerminalState, TerminalStateSlice } from './types';

const defaultTerminalState: TerminalState = {};

const createTerminalSlice: AppStoreSlice<TerminalStateSlice> = (set) => ({
  ...defaultTerminalState,
});

export default createTerminalSlice;
