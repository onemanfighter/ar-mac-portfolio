import {
  ChakraUIProvider,
  ModalProvider,
  RouterProviderComponent,
} from '@providers';
import { useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function App() {
  const handle = useFullScreenHandle();

  const handleKeyPress = (event: any) => {
    switch (event.key) {
      case 'F10':
        handle.enter();
        break;
      case 'Escape':
        handle.exit();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ChakraUIProvider>
      <FullScreen handle={handle}>
        <ModalProvider>
          <RouterProviderComponent />
        </ModalProvider>
      </FullScreen>
    </ChakraUIProvider>
  );
}

export default App;
