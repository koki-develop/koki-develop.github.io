import React, { memo } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

export type LinkProps = Omit<
  React.HTMLProps<HTMLAnchorElement>,
  'ref' | 'href'
> & {
  href: string;
  external?: boolean;
};

const Link: React.FC<LinkProps> = memo(props => {
  const { external, children, ...linkProps } = props;

  if (!external) {
    const { href, ...otherProps } = linkProps;
    return (
      <ReactRouterLink to={href} {...otherProps}>
        {children}
      </ReactRouterLink>
    );
  }

  return (
    <a
      {...linkProps}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
    >
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
