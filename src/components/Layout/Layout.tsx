import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import BackToTop from '@/components/utils/BackToTop';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { theme } from '@/components/Layout/theme';

export type LayoutProps = {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
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
  const { children, headerContent } = props;

  return (
    <Box>
      <CssBaseline />
      <BackToTop />

      <Header content={headerContent} />
      <Box component='main'>{children}</Box>
      <Footer />
    </Box>
  );
});

LayoutContent.displayName = 'LayoutContent';

export default Layout;
