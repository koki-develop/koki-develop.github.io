import React, { useCallback, useMemo } from 'react';
import Scroll from 'react-scroll';
import Head from 'next/head';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { Config } from '@/types/config';
import Header from './Header';
import Footer from './Footer';
import { theme } from './theme';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const useStyles = makeStyles(() =>
  createStyles({
    main: {
      paddingTop: theme.spacing(10),
    },
    backToTopButton: {
      bottom: theme.spacing(2),
      position: 'fixed',
      right: theme.spacing(2),
    },
  }),
);

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
  const classes = useStyles();

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

      <main className={classes.main}>{children}</main>

      <Footer config={config} />

      <Zoom in={trigger}>
        <Fab
          className={classes.backToTopButton}
          color='primary'
          onClick={handleClickBackToTop}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </div>
  );
});

Content.displayName = 'LayoutContent';

export default Root;
