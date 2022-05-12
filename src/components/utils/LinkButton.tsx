import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import Link, { LinkProps } from '@/components/utils/Link';

export type LinkButtonProps = LinkProps & {
  buttonProps: ButtonProps;
};

const LinkButton: React.VFC<LinkButtonProps> = React.memo(props => {
  const { buttonProps, ...linkProps } = props;

  return (
    <Link {...linkProps}>
      <Button {...buttonProps} />
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
