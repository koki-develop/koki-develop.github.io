import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

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

type FadeSlideUpProps = {
  children: React.ReactNode;
};

const FadeSlideUp: React.VFC<FadeSlideUpProps> = (props: FadeSlideUpProps) => {
  const classes = useStyles();

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
      {props.children}
    </div>
  );
};

export default FadeSlideUp;
