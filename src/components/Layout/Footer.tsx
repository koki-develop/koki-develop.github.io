import Box from '@mui/material/Box';
import React from 'react';
import FooterLinkList from '@/components/Layout/FooterLinkList';

const Footer: React.VFC = React.memo(() => {
  return (
    <Box
      component='footer'
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <small>&copy;2021</small>

      <FooterLinkList />
    </Box>
  );
});

Footer.displayName = 'Footer';

export default Footer;
