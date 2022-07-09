import React, { memo } from 'react';
import { Routes } from '@/routes';
import FooterLinkListItem from '@/components/Layout/FooterLinkListItem';

const FooterLinkList: React.FC = memo(() => {
  return (
    <ul>
      <FooterLinkListItem
        external
        href='https://github.com/koki-develop/koki-develop.github.io'
      >
        View on GitHub
      </FooterLinkListItem>
      <FooterLinkListItem href={Routes.privacyPolicy()}>
        プライバシーポリシー
      </FooterLinkListItem>
    </ul>
  );
});

FooterLinkList.displayName = 'FooterLinkList';

export default FooterLinkList;
