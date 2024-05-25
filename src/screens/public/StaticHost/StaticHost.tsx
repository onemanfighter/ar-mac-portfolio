import { Outlet } from 'react-router-dom';
import { StaticHostProps } from './type';

const StaticHost = (props: StaticHostProps) => {
  return (
    <div>
      <h1>StaticHost</h1>
      <Outlet />
    </div>
  );
};

export default StaticHost;
