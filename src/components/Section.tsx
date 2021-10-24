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
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
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

export type SectionProps = {
  children: React.ReactNode;
  title?: string;
  hideTitle?: boolean;
  disablePadding?: boolean;
};

const Section: React.VFC<SectionProps> = React.memo((props: SectionProps) => {
  const classes = useStyles();

  const { children, title, hideTitle, disablePadding } = props;

  return (
    <Box>
      {title && <Divider id={title} />}
      <Box
        className={classes.section}
        component='section'
      >
        {title && !hideTitle && (
          <Typography className={classes.title}>
            {title}
          </Typography>
        )}
        <Container
          disableGutters={disablePadding}
          maxWidth='md'
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
});

Section.displayName = 'Section';

export default Section;
