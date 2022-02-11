import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { theme } from '@/components/Layout/theme';
import BackToTop from '@/components/utils/BackToTop';

export type LayoutProps = {
  children: React.ReactNode;
  breadCrumbs?: React.ReactNode[];
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
  const { children, breadCrumbs, headerContent } = props;

  return (
    <Box>
      <CssBaseline />
      <BackToTop />

      <Header content={headerContent} />

      {breadCrumbs && (
        <Container maxWidth='lg' sx={{ mt: 2 }}>
          <Breadcrumbs separator='›'>{breadCrumbs}</Breadcrumbs>
        </Container>
      )}

      <Box component='main'>{children}</Box>

      <Footer />
    </Box>
  );
});

LayoutContent.displayName = 'LayoutContent';

export default Layout;
