import { renderHook } from '@testing-library/react-hooks';

import { usersSelector } from '../Users.selector';
import { settingsStore } from '@settingsStore';

describe('users selector', () => {
  it('should return default users state', () => {
    const { result } = renderHook(() => settingsStore(usersSelector));

    expect(result.current).toMatchSnapshot();
  });
});
