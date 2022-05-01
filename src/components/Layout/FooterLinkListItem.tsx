import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Link from '@/components/utils/Link';

export type LinkListItemProps = {
  children: React.ReactNode;

  href: string;
  external?: boolean;
};

const FooterLinkListItem: React.VFC<LinkListItemProps> = React.memo(props => {
  const { children, href, external } = props;

  const theme = useTheme();

  return (
    <Box
      component='li'
      sx={{
        fontSize: theme.typography.caption.fontSize,
        marginBottom: 1,
        textAlign: 'center',
      }}
    >
      <Link href={href} external={external}>
        {children}
      </Link>
    </Box>
  );
});

FooterLinkListItem.displayName = 'FooterLinkListItem';

export default FooterLinkListItem;
