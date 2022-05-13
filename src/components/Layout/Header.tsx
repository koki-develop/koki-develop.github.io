import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Link from '@/components/utils/Link';
import { Routes } from '@/routes';
import { config } from '@/config';
import { useDown } from '@/hooks/breakpointsHooks';

const Header: React.VFC = React.memo(() => {
  const isMdDown = useDown('md');

  return (
    <AppBar position={isMdDown ? 'sticky' : 'static'}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Link className='flex items-center' href={Routes.home()}>
            <Avatar src='/images/profile.png' sx={{ mr: 1 }} alt='Logo' />
            <Typography component='h1' variant='h6'>
              {config.profile.name}
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;
