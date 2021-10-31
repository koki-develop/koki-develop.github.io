import React from 'react';

export type ExternalLinkProps = React.HTMLProps<HTMLAnchorElement>;

const ExternalLink: React.VFC<ExternalLinkProps> = React.memo(props => {
  return <a target='_blank' rel='noreferrer noopener' {...props} />;
});

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
