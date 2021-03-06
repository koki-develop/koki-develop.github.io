import classNames from 'classnames';
import React, { memo } from 'react';

export type CardProps = React.HTMLProps<HTMLDivElement>;

const Card: React.FC<CardProps> = memo(props => {
  const { className, ...divProps } = props;

  return (
    <div
      {...divProps}
      className={classNames(className, 'rounded bg-white shadow')}
    />
  );
});

Card.displayName = 'Card';

export default Card;
