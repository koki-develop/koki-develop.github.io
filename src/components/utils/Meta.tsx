import React, { useMemo } from 'react';
import Head from 'next/head';
import { config } from '@/config';

export type MetaProps = {
  hideSiteName?: boolean;
  title?: string;
};

const Meta: React.VFC<MetaProps> = React.memo(props => {
  const { title = config.profile.name, hideSiteName } = props;

  const titleText = useMemo(() => {
    if (!title) {
      return config.profile.name;
    }
    if (hideSiteName) {
      return title;
    }
    return `${title} | ${config.profile.name}`;
  }, [hideSiteName, title]);

  return (
    <Head>
      <title>{titleText}</title>
      <meta property='og:title' content={titleText} />
    </Head>
  );
});

Meta.displayName = 'Meta';

export default Meta;
