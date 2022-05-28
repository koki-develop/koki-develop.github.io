import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import BackToTop from '@/components/utils/BackToTop';

const Layout: React.FC = memo(() => {
  return (
    <div>
      <BackToTop />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
