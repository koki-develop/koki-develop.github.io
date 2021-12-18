import React, { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Config } from '@/types/config';
import { Routes } from '@/routes';
import AnchorLink from '@/components/utils/AnchorLink';

export type HeaderProps = {
  config: Config;
  hideMenu: boolean;
};

const Header: React.VFC<HeaderProps> = React.memo(props => {
  const { config, hideMenu } = props;

  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const handleClickSideMenuItem = useCallback(() => {
    setOpenSideMenu(false);
  }, []);
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
            <Link href={Routes.home} passHref>
              <Box
                component='a'
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <Avatar src='/images/profile.png' sx={{ marginRight: 0.5 }} />
                <Typography variant='h6'>{config.profile.name}</Typography>
              </Box>
            </Link>
          </Box>

          {!hideMenu && (
            <Box>
              <Hidden smDown>
                <Box component='ul' display='flex'>
                  {menuItems.map(item => (
                    <Box
                      key={item}
                      component='li'
                      sx={{
                        fontSize: theme => theme.typography.body2.fontSize,
                        '&:not(:first-of-type)': {
                          marginLeft: 2,
                        },
                      }}
                    >
                      <AnchorLink to={item}>{item}</AnchorLink>
                    </Box>
                  ))}
                </Box>
              </Hidden>

              <Hidden smUp>
                <Box>
                  <IconButton onClick={handleClickHamburger} size='large'>
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Drawer
                  anchor='right'
                  open={openSideMenu}
                  onClose={handleCloseSideMenu}
                >
                  <List sx={{ width: 200 }} disablePadding>
                    {menuItems.map(item => (
                      <React.Fragment key={item}>
                        <AnchorLink to={item}>
                          <ListItem
                            sx={{ padding: 2 }}
                            button
                            onClick={handleClickSideMenuItem}
                          >
                            {item}
                          </ListItem>
                        </AnchorLink>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                </Drawer>
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
