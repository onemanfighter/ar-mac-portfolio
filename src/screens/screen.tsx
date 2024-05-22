import { appStore } from '@store';
import { useEffect } from 'react';

const Screen = () => {
  const { Modal } = appStore();

  useEffect(() => {
    console.log(Modal);
  }, [Modal]);

  return <div>Screen</div>;
};

export default Screen;
