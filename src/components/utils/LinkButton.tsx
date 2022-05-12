import React from 'react';
import Button, { ButtonProps } from '@/components/utils/Button';
import Link, { LinkProps } from '@/components/utils/Link';

export type LinkButtonProps = LinkProps & {
  buttonProps: ButtonProps;
};

const LinkButton: React.VFC<LinkButtonProps> = React.memo(props => {
  const { children, buttonProps, ...linkProps } = props;

  return (
    <Link {...linkProps}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
