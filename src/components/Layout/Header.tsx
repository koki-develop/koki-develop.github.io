import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes } from '@/routes';
import { config } from '@/config';

const Header: React.VFC = React.memo(() => {
  return (
    <AppBar position='static'>
      <Container maxWidth='md' disableGutters>
        <Toolbar>
          <Link href={Routes.home()} passHref>
            <MuiLink sx={{ alignItems: 'center', display: 'flex' }}>
              <Avatar src='/images/profile.png' sx={{ mr: 1 }} />
              <Typography component='h1' variant='h6'>
                {config.profile.name}
              </Typography>
            </MuiLink>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;
