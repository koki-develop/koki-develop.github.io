import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import React, { useCallback } from 'react';
import Scroll from 'react-scroll';

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
        sx={{
          bottom: theme => theme.spacing(2),
          position: 'fixed',
          right: theme => theme.spacing(2),
          zIndex: theme => theme.zIndex.modal,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
});

BackToTop.displayName = 'BackToTop';

export default BackToTop;
