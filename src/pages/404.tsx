import React from 'react';
import Layout from '../layout';
import {
  Box,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
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

const NotFound: React.VFC = () => {
  const classes = useStyles();

  const message = 'お探しのページは見つかりませんでした';

  return (
    <Layout
      title={message}
      hideMenu
    >
      <Box className={classes.messageContainer}>
        <Typography className={classes.message}>
          {message}
        </Typography>
      </Box>
    </Layout>
  );
};

export default NotFound;
