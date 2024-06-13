import { SettingsStoreState } from '../../settingsStore';

const UserId = 'amitraikwar';
const usersSelector = (state: SettingsStoreState) => ({
  userData: state.Users[UserId],
});

export { usersSelector };
