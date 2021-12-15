import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export type AnchorLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

const AnchorLink: React.VFC<AnchorLinkProps> = React.memo(props => {
  const { children, className, to } = props;

  return (
    <ScrollLink
      className={className}
      smooth
      to={to}
      offset={-80}
      duration={500}
    >
      {children}
    </ScrollLink>
  );
});

AnchorLink.displayName = 'AnchorLink';

export default AnchorLink;
