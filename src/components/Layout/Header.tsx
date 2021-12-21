import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes } from '@/routes';
import AnchorLink from '@/components/utils/AnchorLink';
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

type SideMenuProps = {
  open: boolean;
  onClose: () => void;
  items: string[];
};

const SideMenu: React.VFC<SideMenuProps> = React.memo(props => {
  const { open, onClose, items } = props;

  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <List sx={{ width: 200 }} disablePadding>
        {items.map(item => (
          <React.Fragment key={item}>
            <AnchorLink to={item}>
              <ListItem sx={{ padding: 2 }} button onClick={onClose}>
                <ListItemText
                  primaryTypographyProps={{
                    sx: { fontSize: theme => theme.typography.body2.fontSize },
                  }}
                  primary={item}
                />
              </ListItem>
            </AnchorLink>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
});

SideMenu.displayName = 'SideMenu';

type MenuListProps = {
  items: string[];
};

const MenuList: React.VFC<MenuListProps> = React.memo(props => {
  const { items } = props;

  return (
    <Box component='ul' display='flex'>
      {items.map(item => (
        <Box
          key={item}
          component='li'
          sx={{
            fontSize: theme => theme.typography.body2.fontSize,
            '&:not(:first-of-type)': {
              ml: 2,
            },
          }}
        >
          <AnchorLink to={item}>{item}</AnchorLink>
        </Box>
      ))}
    </Box>
  );
});

MenuList.displayName = 'MenuList';

export type HeaderProps = {
  hideMenu: boolean;
};

const Header: React.VFC<HeaderProps> = React.memo(props => {
  const { hideMenu } = props;

  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const handleClickHamburger = useCallback(() => {
    setOpenSideMenu(true);
  }, []);
  const handleCloseSideMenu = useCallback(() => {
    setOpenSideMenu(false);
  }, []);

  // TODO: 一箇所で管理したい
  const menuItems = useMemo(() => {
    return ['About', 'Skills', 'Works', 'History', 'Contact'];
  }, []);

  return (
    <AppBar>
      <Container maxWidth='md'>
        <Toolbar sx={{ height: theme => theme.spacing(10) }}>
          <Box sx={{ alignItems: 'center', display: 'flex', flexGrow: 1 }}>
            <Logo />
          </Box>

          {!hideMenu && (
            <Box>
              <Hidden smDown>
                <MenuList items={menuItems} />
              </Hidden>

              <Hidden smUp>
                <Box>
                  <IconButton onClick={handleClickHamburger} size='large'>
                    <MenuIcon />
                  </IconButton>
                </Box>
                <SideMenu
                  open={openSideMenu}
                  onClose={handleCloseSideMenu}
                  items={menuItems}
                />
              </Hidden>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;
