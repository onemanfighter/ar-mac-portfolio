import { SettingsStoreSlice } from '../../settingsStore';
import { AccessibilityState, AccessibilityStateSlice } from './types';

const defaultAccessibilityState: AccessibilityState = {};

const createAccessibilitySlice: SettingsStoreSlice<AccessibilityStateSlice> = (
  set,
) => ({
  ...defaultAccessibilityState,
});

export default createAccessibilitySlice;
