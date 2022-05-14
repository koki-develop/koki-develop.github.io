import classNames from 'classnames';
import React, { useMemo } from 'react';
import HistoryCard from '@/components/model/history/HistoryCard';
import { History } from '@/types/history';

export type HistoryTimelineItemProps = {
  history: History;
  connector: boolean;
};

const HistoryTimelineItem: React.VFC<HistoryTimelineItemProps> = React.memo(
  props => {
    const { history, connector } = props;

    const active = useMemo(() => {
      return !history.to;
    }, [history.to]);

    return (
      <div className='flex lg:even:flex-row-reverse lg:even:text-right'>
        <div className='hidden grow basis-0 lg:block' />
        <div className='flex grow-0 flex-col items-center px-4 pt-2'>
          <div
            className={classNames('mb-2 h-3 w-3 rounded-full', {
              'bg-red-500 shadow': active,
              'border-2 border-gray-300': !active,
            })}
          />
          {connector && <div className='grow border-x border-gray-300' />}
        </div>
        <div className='grow basis-0 pb-2'>
          <HistoryCard history={history} />
        </div>
      </div>
    );
  },
);

HistoryTimelineItem.displayName = 'HistoryTimelineItem';

export default HistoryTimelineItem;
