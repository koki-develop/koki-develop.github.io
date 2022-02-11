import { format } from 'date-fns';
import React from 'react';

export type TimeProps = {
  datetime: Date | string;
};

const Time: React.VFC<TimeProps> = React.memo(props => {
  const { datetime } = props;
  const date = new Date(datetime);

  return (
    <time dateTime={date.toISOString()}>{format(date, 'yyyy/MM/dd')}</time>
  );
});

Time.displayName = 'Time';

export default Time;
