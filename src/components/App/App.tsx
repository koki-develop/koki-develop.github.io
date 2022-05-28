import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/components/App/AppRoutes';

const App: React.FC = memo(() => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
});

App.displayName = 'App';

export default App;
