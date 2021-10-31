import React, { useCallback, useMemo } from 'react';
import Scroll from 'react-scroll';
import Head from 'next/head';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  makeStyles,
  createStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Config } from '@/types/config';
import Header from './Header';
import Footer from './Footer';
import { theme } from './theme';

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
    <ThemeProvider theme={theme}>
      <Content {...props} />
    </ThemeProvider>
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
