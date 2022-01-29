import React, { useMemo } from 'react';
import Head from 'next/head';
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
  hideSiteName?: boolean;
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
  const { children, title, hideSiteName } = props;

  const titleText = useMemo(() => {
    if (!title) {
      return config.profile.name;
    }
    if (hideSiteName) {
      return title;
    }
    return `${title} | ${config.profile.name}`;
  }, [hideSiteName, title]);

  return (
    <Box>
      <Head>
        <title>{titleText}</title>
        <meta property='og:title' content={titleText} />
      </Head>

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
