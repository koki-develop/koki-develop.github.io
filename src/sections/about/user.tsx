import React from 'react';
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
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    name: {
      fontSize: 22,
      marginBottom: theme.spacing(1),
    },
    img: {
      height: 150,
      width: 150,
    },
    tagline: {
      color: '#999',
      fontSize: 20,
    },
  }),
);

type Props = {
  name: string;
  imgSrc: string;
};

const User: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img className={classes.img} src={props.imgSrc} alt={props.name}/>
      <Typography className={classes.name}>{props.name}</Typography>
      <Typography className={classes.tagline}>Developer</Typography>
    </Box>
  );
};

export default User;
