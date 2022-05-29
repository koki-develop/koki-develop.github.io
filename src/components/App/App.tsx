import React, { memo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/components/App/AppRoutes';

const App: React.FC = memo(() => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
});

App.displayName = 'App';

export default App;
