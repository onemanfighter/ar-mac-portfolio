import { SettingsStoreSlice } from '../../settingsStore';
import { UsersState, UsersStateSlice } from './types';

const defaultUsersState: UsersState = {
  amitraikwar: {
    id: 'amitraikwar',
    name: 'Amit Raikwar',
    email: 'raikwar.amit.1603@gmail.com',
    role: 'admin',
    createdAt: '2024-05-13',
    updatedAt: '2021-09-02',
  },
};

const createUsersSlice: SettingsStoreSlice<UsersStateSlice> = (set) => ({
  ...defaultUsersState,
});

export default createUsersSlice;
