import React, { useState } from 'react';
import Link from 'next/link';
import { Routes } from '../routes';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import { AnchorLink } from '../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      height: theme.spacing(10),
    },
    user: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
    },
    avatar: {
      marginRight: theme.spacing(1),
    },
    name: {
      fontSize: 18,
      marginBottom: 0,
    },
    menu: {
      display: 'flex',
    },
    menuItem: {
      '&:not(:first-child)': {
        marginLeft: theme.spacing(2),
      },
    },
    sideMenu: {
      padding: 0,
      width: 200,
    },
    sideMenuItem: {
      padding: 20,
    },
  }),
);

type HeaderProps = {
  hideMenu: boolean;
};

const Header: React.VFC<HeaderProps> = (props: HeaderProps) => {
  const classes = useStyles();

  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const handleClickSideMenuItem = () => setOpenSideMenu(false);
  const handleClickHamburger = () => setOpenSideMenu(true);
  const handleCloseSideMenu = () => setOpenSideMenu(false);

  const menuItems = [
    { text: 'Skill', to: 'skill' },
    { text: 'Portfolio', to: 'portfolio' },
    { text: 'History', to: 'history' },
  ];

  return (
    <AppBar>
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.user}>
            <Avatar className={classes.avatar} src='/images/profile.png'/>
            <Link href={Routes.home}>
              <a className={classes.name}>Koki Sato</a>
            </Link>
          </Box>
          {!props.hideMenu && (
            <Box>
              <Hidden xsDown>
                <ul className={classes.menu}>
                  {menuItems.map(item => (
                    <li key={item.to} className={classes.menuItem}>
                      <AnchorLink to={item.to}>{item.text}</AnchorLink>
                    </li>
                  ))}
                </ul>
              </Hidden>

              <Hidden smUp>
                <Box>
                  <IconButton onClick={handleClickHamburger}><Menu/></IconButton>
                </Box>
                <Drawer anchor='right' open={openSideMenu} onClose={handleCloseSideMenu}>
                  <List className={classes.sideMenu}>
                    {menuItems.map(item => (
                      <React.Fragment key={item.to}>
                        <AnchorLink to={item.to}>
                          <ListItem className={classes.sideMenuItem} onClick={handleClickSideMenuItem}>
                            {item.text}
                          </ListItem>
                        </AnchorLink>
                        <Divider/>
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
};

export default Header;
