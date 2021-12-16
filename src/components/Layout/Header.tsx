import React, { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import MenuIcon from '@mui/icons-material/Menu';
import { Config } from '@/types/config';
import { Routes } from '@/routes';
import AnchorLink from '@/components/utils/AnchorLink';

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
    avatar: {
      marginRight: theme.spacing(0.5),
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
        <Toolbar className={classes.toolbar}>
          <div className={classes.user}>
            <Link href={Routes.home}>
              <a className={classes.userLink}>
                <Avatar className={classes.avatar} src='/images/profile.png' />
                <Typography className={classes.userName}>
                  {config.profile.name}
                </Typography>
              </a>
            </Link>
          </div>

          {!hideMenu && (
            <div>
              <Hidden smDown>
                <ul className={classes.menu}>
                  {menuItems.map(item => (
                    <li key={item} className={classes.menuItem}>
                      <AnchorLink to={item}>{item}</AnchorLink>
                    </li>
                  ))}
                </ul>
              </Hidden>

              <Hidden smUp>
                <div>
                  <IconButton onClick={handleClickHamburger} size="large">
                    <MenuIcon />
                  </IconButton>
                </div>
                <Drawer
                  anchor='right'
                  open={openSideMenu}
                  onClose={handleCloseSideMenu}
                >
                  <List className={classes.sideMenu} disablePadding>
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
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;
