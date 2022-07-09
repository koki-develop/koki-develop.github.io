import React, { memo } from 'react';
import Button from '@/components/utils/Button';
import Link from '@/components/utils/Link';
import type { ButtonProps } from '@/components/utils/Button';
import type { LinkProps } from '@/components/utils/Link';

export type LinkButtonProps = LinkProps & {
  buttonProps: ButtonProps;
};

const LinkButton: React.FC<LinkButtonProps> = memo(props => {
  const { children, buttonProps, ...linkProps } = props;

  return (
    <Link {...linkProps}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
