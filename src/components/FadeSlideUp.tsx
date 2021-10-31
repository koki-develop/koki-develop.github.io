import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      transition: '1.5s',
    },
    show: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    hidden: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
  }),
);

export type FadeSlideUpProps = {
  children: React.ReactNode;
};

const FadeSlideUp: React.VFC<FadeSlideUpProps> = React.memo(props => {
  const classes = useStyles();

  const { children } = props;

  const { ref, inView } = useInView({
    rootMargin: '200px 0px 0px 0px',
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={classNames(classes.root, {
        [classes.show]: inView,
        [classes.hidden]: !inView,
      })}
    >
      {children}
    </div>
  );
});

FadeSlideUp.displayName = 'FadeSlideUp';

export default FadeSlideUp;
