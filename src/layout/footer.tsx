import React from 'react';
import Link from 'next/link';
import { Routes } from '../routes';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { ExternalLink } from '../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
    listItem: {
      fontSize: 12,
      marginBottom: theme.spacing(1),
      textAlign: 'center',
    },
  }),
);

const Footer: React.VFC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <small>&copy;2021</small>

      <ul>
        <li className={classes.listItem}>
          <ExternalLink href='https://github.com/kou-pg-0131/portfolio'>View on GitHub</ExternalLink>
        </li>
        <li className={classes.listItem}>
          <Link href={Routes.privacyPolicy}>
            <a>プライバシーポリシー</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
