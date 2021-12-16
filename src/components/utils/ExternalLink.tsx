import React from 'react';
import Link, { LinkProps } from '@mui/material/Link';

export type ExternalLinkProps = LinkProps;

const ExternalLink: React.VFC<ExternalLinkProps> = React.memo(props => {
  return <Link target='_blank' rel='noreferrer noopener' {...props} />;
});

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
