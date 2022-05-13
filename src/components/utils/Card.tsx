import classNames from 'classnames';
import React from 'react';

export type CardProps = React.HTMLProps<HTMLDivElement>;

const Card: React.VFC<CardProps> = React.memo(props => {
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
