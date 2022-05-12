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
        'flex items-center bg-white hover:bg-gray-100 transition shadow-md hover:shadow-lg border rounded',
        {
          'px-4 py-2': size === 'medium',
          'px-6 py-2': size === 'large',
        },
      )}
      {...buttonProps}
    >
      {startIcon && <span className='text-lg mr-1'>{startIcon}</span>}
      {children}
      {endIcon && <span className='text-lg ml-1'>{endIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
