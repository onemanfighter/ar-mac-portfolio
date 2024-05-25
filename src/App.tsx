import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ChakraUIProvider,
  ModalProvider,
  RouterProviderComponent,
} from '@providers';

function App() {
  const { t } = useTranslation();
  return (
    <ChakraUIProvider>
      <React.StrictMode>
        <ModalProvider>
          <RouterProviderComponent />
        </ModalProvider>
      </React.StrictMode>
    </ChakraUIProvider>
  );
}

export default App;
