import React from 'react';
import HistoryTimelineItem from '@/components/model/history/HistoryTimelineItem';
import { History } from '@/types/history';

export type HistoryTimelineProps = {
  histories: History[];
};

const HistoryTimeline: React.VFC<HistoryTimelineProps> = React.memo(props => {
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
