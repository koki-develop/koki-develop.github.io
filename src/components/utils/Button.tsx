import classNames from 'classnames';
import React from 'react';

export type ButtonProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  'type' | 'size'
> & {
  size?: 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const Button: React.VFC<ButtonProps> = React.memo(props => {
  const {
    children,
    className,
    size = 'medium',
    startIcon,
    endIcon,
    ...buttonProps
  } = props;

  return (
    <button
      type='button'
      className={classNames(
        className,
        'flex items-center rounded border bg-white shadow-md transition hover:bg-gray-100 hover:shadow-lg',
        {
          'px-4 py-2': size === 'medium',
          'px-6 py-2': size === 'large',
        },
      )}
      {...buttonProps}
    >
      {startIcon && <span className='mr-1 text-lg'>{startIcon}</span>}
      {children}
      {endIcon && <span className='ml-1 text-lg'>{endIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
