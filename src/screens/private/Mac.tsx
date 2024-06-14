import { createContext, useEffect, useState } from 'react';
import {
  displayBrightnessSelector,
  displayNightShiftSelector,
  displayTrueToneSelector,
  settingsStore,
} from '@settingsStore';
import { uiStore, dateTimeSelector, useShallow } from '@uiStore';
import { Outlet } from 'react-router-dom';

export const LaunchpadContext = createContext({
  launchpad: false,
  setLaunchpad: (value: boolean) => {},
});

const TimerComponent = () => {
  const { initTimer } = uiStore(dateTimeSelector);

  useEffect(() => {
    initTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

const Mac = () => {
  const [launchpad, setLaunchpad] = useState(false);
  const { brightness } = settingsStore(useShallow(displayBrightnessSelector));
  const { nightShift } = settingsStore(useShallow(displayNightShiftSelector));
  const { trueTone } = settingsStore(useShallow(displayTrueToneSelector));

  return (
    <LaunchpadContext.Provider value={{ launchpad, setLaunchpad }}>
      <TimerComponent />
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
    </LaunchpadContext.Provider>
  );
};

export default Mac;
