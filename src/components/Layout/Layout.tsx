import React, { useCallback, useMemo } from 'react';
import Scroll from 'react-scroll';
import Head from 'next/head';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Config } from '@/types/config';
import Header from './Header';
import Footer from './Footer';
import { theme } from './theme';

export type LayoutProps = {
  children: React.ReactNode;
  config: Config;
  title?: string;
  hideMenu?: boolean;
};

const Root: React.VFC<LayoutProps> = React.memo(props => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Content {...props} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
});

Root.displayName = 'Layout';

const Content: React.VFC<LayoutProps> = React.memo(props => {
  const { children, config, title, hideMenu } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClickBackToTop = useCallback(() => {
    Scroll.animateScroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  }, []);

  const titleText = useMemo(() => {
    if (!title) {
      return config.profile.name;
    }
    return `${title} | ${config.profile.name}`;
  }, [config.profile.name, title]);

  return (
    <div>
      <Head>
        <title>{titleText}</title>
        <meta property='og:title' content={titleText} />
      </Head>

      <CssBaseline />

      <Header config={config} hideMenu={hideMenu} />

      <Box component='main' sx={{ pt: 10 }}>
        {children}
      </Box>

      <Footer config={config} />

      <Zoom in={trigger}>
        <Fab
          color='primary'
          onClick={handleClickBackToTop}
          sx={{
            bottom: theme.spacing(2),
            position: 'fixed',
            right: theme.spacing(2),
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </div>
  );
});

Content.displayName = 'LayoutContent';

export default Root;
