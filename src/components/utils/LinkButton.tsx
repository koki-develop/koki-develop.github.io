import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';
import React from 'react';

export type LinkButtonProps = ButtonProps<'a'> & {
  external?: boolean;
};

const LinkButton: React.VFC<LinkButtonProps> = React.memo(props => {
  const { external, ...buttonProps } = props;
  const { href, ...otherButtonProps } = buttonProps;

  if (external) {
    return (
      <Button
        href={href}
        target='_blank'
        rel='noreferrer'
        {...otherButtonProps}
      />
    );
  }

  return (
    <Link href={href}>
      <Button href={href} {...otherButtonProps} />
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
