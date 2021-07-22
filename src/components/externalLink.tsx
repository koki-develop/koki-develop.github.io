import React from 'react';

type ExternalLinkProps = React.HTMLProps<HTMLAnchorElement>;

const ExternalLink: React.VFC<ExternalLinkProps> = (props: ExternalLinkProps) => {
  return (
    <a target='_blank' rel='noreferrer noopener' {...props}>
      {props.children}
    </a>
  );
};

export default ExternalLink;
