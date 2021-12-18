import React, { useCallback } from 'react';
import Scroll from 'react-scroll';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop: React.VFC = React.memo(() => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClickBackToTop = useCallback(() => {
    Scroll.animateScroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  }, []);

  return (
    <Zoom in={trigger}>
      <Fab
        color='primary'
        onClick={handleClickBackToTop}
        sx={theme => ({
          bottom: theme.spacing(2),
          position: 'fixed',
          right: theme.spacing(2),
        })}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
});

BackToTop.displayName = 'BackToTop';

export default BackToTop;
