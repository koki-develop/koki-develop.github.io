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
};

const Root: React.VFC<LayoutProps> = React.memo(props => {
  return (
    <ThemeProvider theme={theme}>
      <Content {...props} />
    </ThemeProvider>
  );
});

Root.displayName = 'Layout';

const Content: React.VFC<LayoutProps> = React.memo(props => {
  const { children } = props;

  return (
    <Box>
      <CssBaseline />

      <Header />

      <Box component='main'>{children}</Box>

      <Footer />

      <BackToTop />
    </Box>
  );
});

Content.displayName = 'LayoutContent';

export default Root;
