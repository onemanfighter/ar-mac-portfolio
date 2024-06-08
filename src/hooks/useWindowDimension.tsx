import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { noOfProgram } = { noOfProgram: 1 };
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width: width,
    height: height * 0.85,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
