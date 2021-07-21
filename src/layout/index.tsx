import React from 'react';
import * as Scroll from 'react-scroll';
import Head from 'next/head';
import {
  Box,
  CssBaseline,
  Fab,
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

export const Layout: React.VFC<LayoutProps> = (props: LayoutProps) => {
  const classes = useStyles();

  const handleClickBackToTop = () => {
    Scroll.animateScroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{props.title && `${props.title} | `}Koki Sato</title>
      </Head>

      <CssBaseline/>

      <Header hideMenu={props.hideMenu}/>

      <Box component='main' className={classes.main}>
        {props.children}
      </Box>

      <Footer/>

      <Fab
        className={classes.backToTop}
        onClick={handleClickBackToTop}
      >
        <KeyboardArrowUpIcon/>
      </Fab>
    </ThemeProvider>
  );
};
