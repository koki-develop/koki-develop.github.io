import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import urlJoin from 'url-join';
import { config } from '@/config';

export type MetaProps = {
  hideSiteName?: boolean;

  title?: string;
  description?: string;
  image?: string;
  twitterCard?: string;
};

const Meta: React.VFC<MetaProps> = React.memo(props => {
  const {
    hideSiteName,

    title,
    description,
    image = 'images/profile.jpg',
    twitterCard = 'summary',
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
      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
        </>
      )}

      {/* ogp */}
      <meta property='og:site_name' content={config.profile.name} />
      <meta property='og:url' content={urlJoin(config.url, router.asPath)} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ja_JP' />
      <meta property='og:image' content={urlJoin(config.url, image)} />

      {/* twitter */}
      <meta property='twitter:card' content={twitterCard} />
      <meta
        property='twitter:site'
        content={`@${config.socials.twitter.username}`}
      />
    </Head>
  );
});

Meta.displayName = 'Meta';

export default Meta;
