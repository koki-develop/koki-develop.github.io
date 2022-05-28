import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Routes as RoutePaths } from '@/routes';
import Layout from '@/components/Layout';
import ErrorPage from '@/components/pages/ErrorPage';
import HomePage from '@/components/pages/Home';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicy';

const AppRoutes: React.FC = memo(() => {
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
