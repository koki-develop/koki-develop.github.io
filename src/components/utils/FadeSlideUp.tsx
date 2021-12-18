import React from 'react';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';

export type FadeSlideUpProps = {
  children: React.ReactNode;
};

const FadeSlideUp: React.VFC<FadeSlideUpProps> = React.memo(props => {
  const { children } = props;

  const { ref, inView } = useInView({
    rootMargin: '200px 0px 0px 0px',
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      sx={{
        transition: '1.5s',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
      }}
    >
      {children}
    </Box>
  );
});

FadeSlideUp.displayName = 'FadeSlideUp';

export default FadeSlideUp;
