import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as qs from 'query-string';
import React, { useMemo } from 'react';
import Link, { LinkProps } from '@/components/utils/Link';

type BaseProps = Omit<LinkProps, 'external' | 'href'>;

type TwitterShareButtonProps = BaseProps & {
  sns: 'twitter';
  url: string;
  text: string;
};

type FacebookShareButtonProps = BaseProps & {
  sns: 'facebook';
  url: string;
  text?: undefined;
};

export type ShareButtonProps =
  | TwitterShareButtonProps
  | FacebookShareButtonProps;

const buildUrl = (url: string, params: Record<string, unknown>): string => {
  return `${url}?${qs.stringify(params)}`;
};

const buildTwitterShareUrl = (url: string, text: string): string => {
  return buildUrl('https://twitter.com/share', { url, text });
};

const buildFacebookShareUrl = (url: string): string => {
  return buildUrl('https://www.facebook.com/share.php', { u: url });
};

const ShareButton: React.VFC<ShareButtonProps> = React.memo(props => {
  const { sns, url, text, ...linkProps } = props;

  const [Icon, iconColor, shareUrl] = useMemo(() => {
    switch (sns) {
      case 'twitter':
        return [TwitterIcon, '#1DA1F2', buildTwitterShareUrl(url, text)];
      case 'facebook':
        return [FacebookIcon, '#1877F2', buildFacebookShareUrl(url)];
    }
  }, [sns, text, url]);

  return (
    <Link external href={shareUrl} {...linkProps}>
      <Icon fontSize='large' htmlColor={iconColor} />
    </Link>
  );
});

ShareButton.displayName = 'ShareButton';

export default ShareButton;
