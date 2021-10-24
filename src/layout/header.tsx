import React, { useState } from 'react';
import Link from 'next/link';
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
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Config } from '@/types/config';
import { Routes } from '@/routes';
import AnchorLink from '@/components/AnchorLink';

const useStyles = makeStyles(theme =>
  createStyles({
    toolbar: {
      height: theme.spacing(10),
    },
    user: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
    },
    userAvatar: {
      marginRight: theme.spacing(1),
    },
    userLink: {
      alignItems: 'center',
      display: 'flex',
      '&:hover': {
        opacity: 1,
      },
    },
    userName: {
      fontSize: theme.typography.h6.fontSize,
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
      width: 200,
    },
    sideMenuItem: {
      padding: 20,
    },
  }),
);

export type HeaderProps = {
  config: Config;
  hideMenu: boolean;
};

const Header: React.VFC<HeaderProps> = React.memo(props => {
  const classes = useStyles();

  const { config, hideMenu } = props;

  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const handleClickSideMenuItem = () => setOpenSideMenu(false);
  const handleClickHamburger = () => setOpenSideMenu(true);
  const handleCloseSideMenu = () => setOpenSideMenu(false);

  const menuItems = ['About', 'Skill', 'Portfolio', 'History', 'Contact'];

  return (
    <AppBar>
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.user}>
            <Link href={Routes.home}>
              <a className={classes.userLink}>
                <Avatar
                  className={classes.userAvatar}
                  src='/images/profile.png'
                />
                <Typography className={classes.userName}>
                  {config.profile.name}
                </Typography>
              </a>
            </Link>
          </Box>

          {!hideMenu && (
            <Box>
              <Hidden xsDown>
                <ul className={classes.menu}>
                  {menuItems.map(item => (
                    <li key={item} className={classes.menuItem}>
                      <AnchorLink to={item}>{item}</AnchorLink>
                    </li>
                  ))}
                </ul>
              </Hidden>

              <Hidden smUp>
                <Box>
                  <IconButton onClick={handleClickHamburger}><MenuIcon /></IconButton>
                </Box>
                <Drawer
                  anchor='right'
                  open={openSideMenu}
                  onClose={handleCloseSideMenu}
                >
                  <List
                    className={classes.sideMenu}
                    disablePadding
                  >
                    {menuItems.map(item => (
                      <React.Fragment key={item}>
                        <AnchorLink to={item}>
                          <ListItem
                            className={classes.sideMenuItem}
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
