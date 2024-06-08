import {
  displayBrightnessSelector,
  displayNightShiftSelector,
  displayTrueToneSelector,
  settingsStore,
} from '@settingsStore';
import { uiStore, dateTimeSelector, useShallow } from '@uiStore';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Mac = () => {
  const { initTimer } = uiStore(dateTimeSelector);
  const { brightness } = settingsStore(useShallow(displayBrightnessSelector));
  const { nightShift } = settingsStore(useShallow(displayNightShiftSelector));
  const { trueTone } = settingsStore(useShallow(displayTrueToneSelector));

  useEffect(() => {
    initTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        filter: `brightness(${brightness / 100})`,
      }}
    >
      <div
        aria-label="mac"
        style={{
          filter: `${nightShift ? 'grayscale(50%)' : ''} ${trueTone ? 'sepia(0.5)' : ''}`,
          transition: 'all 0.4s ease-in-out',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Mac;
