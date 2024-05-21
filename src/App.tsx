import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <React.StrictMode>
      <div>{t('App')}</div>
    </React.StrictMode>
  );
}

export default App;
