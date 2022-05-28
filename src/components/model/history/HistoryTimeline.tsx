import React, { memo } from 'react';
import type { History } from '@/types/history';
import HistoryTimelineItem from '@/components/model/history/HistoryTimelineItem';

export type HistoryTimelineProps = {
  histories: History[];
};

const HistoryTimeline: React.VFC<HistoryTimelineProps> = memo(props => {
  const { histories } = props;

  return (
    <div>
      {histories.map((history, i) => (
        <HistoryTimelineItem
          key={history.title}
          history={history}
          connector={i + 1 !== histories.length}
        />
      ))}
    </div>
  );
});

HistoryTimeline.displayName = 'HistoryTimeline';

export default HistoryTimeline;
