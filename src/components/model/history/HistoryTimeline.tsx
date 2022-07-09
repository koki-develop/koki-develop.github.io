import React, { memo } from 'react';
import type { History } from '@/models/history';
import HistoryTimelineItem from '@/components/model/history/HistoryTimelineItem';

export type HistoryTimelineProps = {
  histories: History[];
};

const HistoryTimeline: React.FC<HistoryTimelineProps> = memo(props => {
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
