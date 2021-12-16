import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Typography from '@mui/material/Typography';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { ConfigLoader } from '@/lib/configLoader';
import { Config } from '@/types/config';
import Layout from '@/components/Layout';

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
    <Layout config={config} title={message} hideMenu>
      <div className={classes.messageContainer}>
        <Typography className={classes.message}>{message}</Typography>
      </div>
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
