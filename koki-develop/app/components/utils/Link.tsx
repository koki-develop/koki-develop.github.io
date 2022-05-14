import NextLink from 'next/link';
import React, { memo } from 'react';

export type LinkProps = Omit<
  React.HTMLProps<HTMLAnchorElement>,
  'ref' | 'href'
> & {
  href: string;
  external?: boolean;
};

const Link: React.VFC<LinkProps> = memo(props => {
  const { external, ...linkProps } = props;

  if (!external) {
    <NextLink {...linkProps} />;
  }

  return (
    <a
      {...linkProps}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
    />
  );
});

Link.displayName = 'Link';

export default Link;
