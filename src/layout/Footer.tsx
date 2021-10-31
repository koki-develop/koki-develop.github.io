import React, { useMemo } from 'react';
import Link from 'next/link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import urlJoin from 'url-join';
import { Routes } from '@/routes';
import { Config } from '@/types/config';
import ExternalLink from '@/components/ExternalLink';

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
    listItem: {
      fontSize: theme.typography.caption.fontSize,
      marginBottom: theme.spacing(1),
      textAlign: 'center',
    },
  }),
);

export type FooterProps = {
  config: Config;
};

const Footer: React.VFC<FooterProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

  const items: { body: React.ReactNode }[] = useMemo(() => {
    return [
      {
        body: (
          <ExternalLink
            href={urlJoin(
              config.socials.github.url,
              config.socials.github.username,
            )}
          >
            View on GitHub
          </ExternalLink>
        ),
      },
      {
        body: (
          <Link href={Routes.privacyPolicy}>
            <a>プライバシーポリシー</a>
          </Link>
        ),
      },
    ];
  }, [config.socials.github.url, config.socials.github.username]);

  return (
    <footer className={classes.footer}>
      <small>&copy;2021</small>

      <ul>
        {items.map((item, i) => (
          <li key={i} className={classes.listItem}>
            {item.body}
          </li>
        ))}
      </ul>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
