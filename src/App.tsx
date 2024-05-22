import React from 'react';
import { useTranslation } from 'react-i18next';

import { ChakraUIProvider } from '@providers';
import { Text } from '@chakra-ui/react';

function App() {
  const { t } = useTranslation();
  return (
    <ChakraUIProvider>
      <React.StrictMode>
        <Text>{t('App')}</Text>
      </React.StrictMode>
    </ChakraUIProvider>
  );
}

export default App;
