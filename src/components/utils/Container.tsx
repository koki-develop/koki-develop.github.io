import classNames from 'classnames';
import React from 'react';

export type ContainerProps = React.HTMLProps<HTMLDivElement>;

const Container: React.VFC<ContainerProps> = React.memo(props => {
  const { children, className, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={classNames(
        className,
        'flex w-full flex-col items-center justify-center',
      )}
    >
      <div
        className={classNames('w-full px-4 sm:w-11/12 md:w-10/12 lg:w-9/12')}
      >
        {children}
      </div>
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
