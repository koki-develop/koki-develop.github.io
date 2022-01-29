import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { config } from '@/config';
import urlJoin from 'url-join';

export type MetaProps = {
  hideSiteName?: boolean;

  title?: string;
  description?: string;
  image?: string;
};

const Meta: React.VFC<MetaProps> = React.memo(props => {
  const {
    hideSiteName,

    title,
    description = config.profile.description,
    image = urlJoin(config.url, 'images/profile.jpg'),
  } = props;

  const router = useRouter();

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
      {/* title */}
      <title>{titleText}</title>
      <meta property='og:title' content={titleText} />

      {/* description */}
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />

      {/* ogp */}
      <meta property='og:site_name' content={config.profile.name} />
      <meta property='og:url' content={urlJoin(config.url, router.asPath)} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ja_JP' />
      <meta property='og:image' content={image} />

      {/* twitter */}
      <meta property='twitter:card' content='summary' />
      <meta
        property='twitter:site'
        content={`@${config.socials.twitter.username}`}
      />
    </Head>
  );
});

Meta.displayName = 'Meta';

export default Meta;
