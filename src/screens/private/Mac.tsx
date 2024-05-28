import { uiStore } from '@uiStore';
import { dateTimeSelector } from '@uiStore/selector';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Mac = () => {
  const { init } = uiStore(dateTimeSelector);

  useEffect(() => {
    init();
  }, []);
  return <Outlet />;
};

export default Mac;
