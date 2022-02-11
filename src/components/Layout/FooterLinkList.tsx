import React from 'react';
import FooterLinkListItem from '@/components/Layout/FooterLinkListItem';
import { Routes } from '@/routes';

const FooterLinkList: React.VFC = React.memo(() => {
  return (
    <ul>
      <FooterLinkListItem
        external
        href='https://github.com/koki-develop/koki-develop'
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
