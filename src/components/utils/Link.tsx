import NextLink from 'next/link';
import React from 'react';

export type LinkProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> & {
  href: string;
  external?: boolean;
};

const Link: React.VFC<LinkProps> = React.memo(props => {
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
