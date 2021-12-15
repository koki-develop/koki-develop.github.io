import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    section: {
      margin: theme.spacing(3),
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
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

const Section: React.VFC<SectionProps> = React.memo(props => {
  const classes = useStyles();

  const { children, title, hideTitle, disablePadding } = props;

  return (
    <div>
      {title && <Divider id={title} />}
      <section className={classes.section}>
        {title && !hideTitle && (
          <Typography className={classes.title}>{title}</Typography>
        )}
        <Container disableGutters={disablePadding} maxWidth='md'>
          {children}
        </Container>
      </section>
    </div>
  );
});

Section.displayName = 'Section';

export default Section;
