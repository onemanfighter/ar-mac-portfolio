import { uiStore } from '@uiStore';
import { dateTimeSelector } from '@uiStore/selector';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Mac = () => {
  const { initTimer } = uiStore(dateTimeSelector);

  useEffect(() => {
    initTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div aria-label="mac">
      <Outlet />
    </div>
  );
};

export default Mac;
