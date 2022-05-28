import classNames from 'classnames';
import React, { memo } from 'react';

export type TooltipProps = React.HTMLProps<HTMLSpanElement> & {
  text: string;
};

const Tooltip: React.FC<TooltipProps> = memo(props => {
  const { text, children, className, ...spanProps } = props;

  return (
    <span {...spanProps} className={classNames(className, 'group relative')}>
      <span className='pointer-events-none absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap rounded bg-black py-1 px-2 text-xs text-white opacity-0 transition before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-b-0 before:border-transparent before:border-t-black before:content-[""] group-hover:opacity-100'>
        {text}
      </span>
      {children}
    </span>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
