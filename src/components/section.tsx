import React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      margin: theme.spacing(3),
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom :theme.spacing(2),
      textAlign: 'center',
    },
  }),
);

type Props = {
  title?: string;
  hideTitle?: boolean;
  children: React.ReactNode;
};

export const Section: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Box>
      {props.title && <Divider id={props.title}/>}
      <Box className={classes.section} component='section'>
        {props.title && !props.hideTitle && (
          <Typography className={classes.title}>
            {props.title}
          </Typography>
        )}
        <Container maxWidth='md'>
          {props.children}
        </Container>
      </Box>
    </Box>
  );
};

export default Section;
