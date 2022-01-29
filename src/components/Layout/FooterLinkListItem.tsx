import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import ExternalLink from '@/components/utils/ExternalLink';

export type LinkListItemProps = {
  children: React.ReactNode;

  href: string;
  external?: boolean;
};

const FooterLinkListItem: React.VFC<LinkListItemProps> = React.memo(props => {
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
        <Link href={href} passHref>
          <MuiLink>{children}</MuiLink>
        </Link>
      )}
    </Box>
  );
});

FooterLinkListItem.displayName = 'FooterLinkListItem';

export default FooterLinkListItem;
