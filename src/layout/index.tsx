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
import { Config } from '@/types/config';
import Header from './Header';
import Footer from './Footer';
import { theme } from './theme';

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

  const handleClickBackToTop = () => {
    Scroll.animateScroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  const subTitle = title ? `${title} | ` : '';
  const titleText = `${subTitle}${config.profile.name}`;

  return (
    <Box>
      <Head>
        <title>{titleText}</title>
        <meta property='og:title' content={titleText} />
      </Head>

      <CssBaseline />

      <Header
        config={config}
        hideMenu={hideMenu}
      />

      <Box component='main' className={classes.main}>
        {children}
      </Box>

      <Footer
        config={config}
      />

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
});

Content.displayName = 'LayoutContent';

export default Root;
