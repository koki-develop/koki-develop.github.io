import React from 'react';
import Head from 'next/head';
import {
  Box,
  CssBaseline,
} from '@material-ui/core';
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
  }),
);

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  hideMenu?: boolean;
};

export const Layout: React.VFC<LayoutProps> = (props: LayoutProps) => {
  const classes = useStyles();

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
    </ThemeProvider>
  );
};
