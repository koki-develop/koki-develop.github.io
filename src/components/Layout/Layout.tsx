import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import BackToTop from '@/components/utils/BackToTop';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.VFC<LayoutProps> = React.memo(props => {
  const { children } = props;

  return (
    <div>
      <BackToTop />

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
