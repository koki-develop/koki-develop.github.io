import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

type AnchorLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

export const AnchorLink: React.VFC<AnchorLinkProps> = (props: AnchorLinkProps) => {
  return (
    <ScrollLink
      className={props.className}
      smooth
      to={props.to}
      offset={-80}
      duration={500}
    >
      {props.children}
    </ScrollLink>
  );
};
