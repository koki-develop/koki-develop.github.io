import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import urlJoin from 'url-join';
import { Routes } from '@/routes';
import ExternalLink from '@/components/utils/ExternalLink';
import { config } from '@/config';

type LinkListItemProps = {
  children: React.ReactNode;
  href: string;
  external?: boolean;
};

const LinkListItem: React.VFC<LinkListItemProps> = React.memo(props => {
  const { children, href, external } = props;

  return (
    <Box
      component='li'
      sx={{
        fontSize: theme => theme.typography.caption.fontSize,
        marginBottom: 1,
        textAlign: 'center',
      }}
    >
      {external ? (
        <ExternalLink href={href}>{children}</ExternalLink>
      ) : (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}
    </Box>
  );
});

LinkListItem.displayName = 'LinkListItem';

const Footer: React.VFC = React.memo(() => {
  return (
    <Box
      component='footer'
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <small>&copy;2021</small>
      <ul>
        <LinkListItem
          external
          href={urlJoin(
            config.socials.github.url,
            config.socials.github.username,
          )}
        >
          View on GitHub
        </LinkListItem>
        <LinkListItem href={Routes.privacyPolicy()}>
          プライバシーポリシー
        </LinkListItem>
      </ul>
    </Box>
  );
});

Footer.displayName = 'Footer';

export default Footer;
