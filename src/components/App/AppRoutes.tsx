import React, { memo, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Routes as RoutePaths } from '@/routes';
import Layout from '@/components/Layout';
import ErrorPage from '@/components/pages/ErrorPage';
import HomePage from '@/components/pages/Home';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicy';

const AppRoutes: React.FC = memo(() => {
  const rendered = useRef<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (rendered.current) {
      window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        page_path: pathname,
        debug_mode: import.meta.env.VITE_STAGE !== 'production',
      });
    }
    rendered.current = true;
  }, [pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={RoutePaths.home()} element={<HomePage />} />
        <Route
          path={RoutePaths.privacyPolicy()}
          element={<PrivacyPolicyPage />}
        />
        <Route
          path='*'
          element={<ErrorPage message='お探しのページは見つかりませんでした' />}
        />
      </Route>
    </Routes>
  );
});

AppRoutes.displayName = 'AppRoutes';

export default AppRoutes;
