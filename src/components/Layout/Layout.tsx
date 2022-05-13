import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { theme } from '@/components/Layout/theme';
import BackToTop from '@/components/utils/BackToTop';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.VFC<LayoutProps> = React.memo(props => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContent {...props} />
    </ThemeProvider>
  );
});

Layout.displayName = 'Layout';

const LayoutContent: React.VFC<LayoutProps> = React.memo(props => {
  const { children } = props;

  return (
    <Box>
      <CssBaseline />
      <BackToTop />

      <Header />

      <Box component='main'>{children}</Box>

      <Footer />
    </Box>
  );
});

LayoutContent.displayName = 'LayoutContent';

export default Layout;
