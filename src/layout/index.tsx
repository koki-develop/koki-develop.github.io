import React from 'react';
import * as Scroll from 'react-scroll';
import Head from 'next/head';
import {
  useScrollTrigger,
  Box,
  CssBaseline,
  Fab,
  Zoom,
} from '@material-ui/core';
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@material-ui/icons';
import {
  makeStyles,
  createStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Header from './header';
import Footer from './footer';
import { theme } from './theme';
import config from '../config';

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      paddingTop: theme.spacing(10),
    },
    backToTop: {
      bottom: theme.spacing(2),
      position: 'fixed',
      right: theme.spacing(2),
    },
  }),
);

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  hideMenu?: boolean;
};

const Root: React.VFC<LayoutProps> = React.memo((props: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props} />
    </ThemeProvider>
  );
});

Root.displayName = 'LayoutRoot';

const Layout: React.VFC<LayoutProps> = (props: LayoutProps) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClickBackToTop = () => {
    Scroll.animateScroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  const subTitle = props.title ? `${props.title} | ` : '';
  const title = `${subTitle}${config.name}`;

  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
      </Head>

      <CssBaseline />

      <Header hideMenu={props.hideMenu} />

      <Box component='main' className={classes.main}>
        {props.children}
      </Box>

      <Footer />

      <Zoom in={trigger}>
        <Fab
          className={classes.backToTop}
          color='primary'
          onClick={handleClickBackToTop}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default Root;
