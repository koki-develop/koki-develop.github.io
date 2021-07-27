import React from 'react';

type ExternalLinkProps = React.HTMLProps<HTMLAnchorElement>;

const ExternalLink: React.VFC<ExternalLinkProps> = React.memo((props: ExternalLinkProps) => {
  return (
    <a target='_blank' rel='noreferrer noopener' {...props}>
      {props.children}
    </a>
  );
});

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
