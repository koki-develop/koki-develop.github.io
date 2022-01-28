import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import BackToTop from '@/components/utils/BackToTop';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { theme } from '@/components/Layout/theme';
import { config } from '@/config';

export type LayoutProps = {
  children: React.ReactNode;
  title?: string;
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
  const { children, title } = props;

  const titleText = useMemo(() => {
    if (!title) {
      return config.profile.name;
    }
    return `${title} | ${config.profile.name}`;
  }, [title]);

  return (
    <Box>
      <Helmet>
        <title>{titleText}</title>
        <meta property='og:title' content={titleText} />
      </Helmet>

      <CssBaseline />

      <Header />

      <Box component='main' sx={{ pt: 10 }}>
        {children}
      </Box>

      <Footer />

      <BackToTop />
    </Box>
  );
});

Content.displayName = 'LayoutContent';

export default Root;
