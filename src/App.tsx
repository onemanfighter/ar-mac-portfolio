import React from 'react';
import { useTranslation } from 'react-i18next';

import { ChakraUIProvider, ModalProvider } from '@providers';
import { Text } from '@chakra-ui/react';
import { Screen } from '@screens';

function App() {
  const { t } = useTranslation();
  return (
    <ChakraUIProvider>
      <React.StrictMode>
        <ModalProvider>
          <Text>{t('App')}</Text>
          <Screen />
        </ModalProvider>
      </React.StrictMode>
    </ChakraUIProvider>
  );
}

export default App;
