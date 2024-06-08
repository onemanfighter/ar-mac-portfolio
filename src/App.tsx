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
      <ModalProvider>
        <RouterProviderComponent />
      </ModalProvider>
    </ChakraUIProvider>
  );
}

export default App;
