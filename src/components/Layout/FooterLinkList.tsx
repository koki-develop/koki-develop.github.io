import React from 'react';
import urlJoin from 'url-join';
import FooterLinkListItem from '@/components/Layout/FooterLinkListItem';
import { Routes } from '@/routes';
import { config } from '@/config';

const FooterLinkList: React.VFC = React.memo(() => {
  return (
    <ul>
      <FooterLinkListItem
        external
        href={urlJoin(
          config.socials.github.url,
          config.socials.github.username,
        )}
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
