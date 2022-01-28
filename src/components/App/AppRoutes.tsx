import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from '@/components/pages/Home';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import NotFound from '@/components/pages/NotFound';
import { Routes as RoutePaths } from '@/routes';

const AppRoutes: React.VFC = React.memo(() => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path={RoutePaths.home} element={<Home />} />
      <Route path={RoutePaths.privacyPolicy} element={<PrivacyPolicy />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
});

AppRoutes.displayName = 'AppRoutes';

export default AppRoutes;
