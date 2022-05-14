import React, { memo } from 'react';
import Button, { ButtonProps } from '@/components/utils/Button';
import Link, { LinkProps } from '@/components/utils/Link';

export type LinkButtonProps = LinkProps & {
  buttonProps: ButtonProps;
};

const LinkButton: React.VFC<LinkButtonProps> = memo(props => {
  const { children, buttonProps, ...linkProps } = props;

  return (
    <Link {...linkProps}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
