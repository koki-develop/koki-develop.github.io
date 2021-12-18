import React, { useMemo } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import urlJoin from 'url-join';
import { Routes } from '@/routes';
import { Config } from '@/types/config';
import ExternalLink from '@/components/utils/ExternalLink';

export type FooterProps = {
  config: Config;
};

const Footer: React.VFC<FooterProps> = React.memo(props => {
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
    <Box
      component='footer'
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <small>&copy;2021</small>
      <ul>
        {items.map((item, i) => (
          <Box
            key={i}
            component='li'
            sx={{
              fontSize: theme => theme.typography.caption.fontSize,
              marginBottom: 1,
              textAlign: 'center',
            }}
          >
            {item.body}
          </Box>
        ))}
      </ul>
    </Box>
  );
});

Footer.displayName = 'Footer';

export default Footer;
