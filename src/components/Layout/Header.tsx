import React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Link from '@/components/utils/Link';
import { Routes } from '@/routes';
import { config } from '@/config';

const Header: React.VFC = React.memo(() => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position={isMdDown ? 'sticky' : 'static'}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Link
            href={Routes.home()}
            sx={{ alignItems: 'center', display: 'flex' }}
          >
            <Avatar src='/images/profile.png' sx={{ mr: 1 }} alt='Logo' />
            <Typography component='h1' variant='h6'>
              {config.profile.name}
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;
