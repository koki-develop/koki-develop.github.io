import React, { memo } from 'react';
import type { LinkProps } from '@/components/utils/Link';
import Link from '@/components/utils/Link';

export type LinkListItemProps = {
  children: React.ReactNode;
} & Pick<LinkProps, 'href' | 'external'>;

const FooterLinkListItem: React.VFC<LinkListItemProps> = memo(props => {
  const { children, href, external } = props;

  return (
    <li className='mb-2 text-center text-xs'>
      <Link href={href} external={external}>
        {children}
      </Link>
    </li>
  );
});

FooterLinkListItem.displayName = 'FooterLinkListItem';

export default FooterLinkListItem;
