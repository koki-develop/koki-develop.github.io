import React from 'react';
import {
  NextPage,
  GetStaticProps,
} from 'next';
import {
  Box,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { ConfigLoader } from '@/lib/configLoader';
import { Config } from '@/types/config';
import Layout from '@/layout';

const useStyles = makeStyles(theme =>
  createStyles({
    messageContainer: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    message: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }),
);

export type NotFoundProps = {
  config: Config;
};

const NotFound: NextPage<NotFoundProps> = props => {
  const classes = useStyles();

  const { config } = props;

  const message = 'お探しのページは見つかりませんでした';

  return (
    <Layout
      config={config}
      title={message}
      hideMenu
    >
      <Box className={classes.messageContainer}>
        <Typography
          classes={{
            root: classes.message,
          }}
        >
          {message}
        </Typography>
      </Box>
    </Layout>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps<NotFoundProps> = async () => {
  const config = ConfigLoader.load();

  return {
    props: {
      config,
    },
  };
};
