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

type SectionProps = {
  title?: string;
  hideTitle?: boolean;
  disablePadding?: boolean;
  children: React.ReactNode;
};

const Section: React.VFC<SectionProps> = React.memo((props: SectionProps) => {
  const classes = useStyles();

  return (
    <Box>
      {props.title && <Divider id={props.title} />}
      <Box
        className={classes.section}
        component='section'
      >
        {props.title && !props.hideTitle && (
          <Typography className={classes.title}>
            {props.title}
          </Typography>
        )}
        <Container
          disableGutters={props.disablePadding}
          maxWidth='md'
        >
          {props.children}
        </Container>
      </Box>
    </Box>
  );
});

Section.displayName = 'Section';

export default Section;
