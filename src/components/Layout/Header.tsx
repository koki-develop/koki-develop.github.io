import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes } from '@/routes';
import { config } from '@/config';

const StyledLink = styled(Link)({
  alignItems: 'center',
  display: 'flex',
  '&:hover': {
    opacity: 1,
  },
});

const Logo: React.VFC = React.memo(() => {
  return (
    <StyledLink to={Routes.home}>
      <Avatar src='/images/profile.png' sx={{ mr: 0.5 }} />
      <Typography variant='h6'>{config.profile.name}</Typography>
    </StyledLink>
  );
});

Logo.displayName = 'Logo';

const Header: React.VFC = React.memo(() => {
  return (
    <AppBar>
      <Container maxWidth='md'>
        <Toolbar sx={{ height: theme => theme.spacing(10) }}>
          <Box sx={{ alignItems: 'center', display: 'flex', flexGrow: 1 }}>
            <Logo />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;
