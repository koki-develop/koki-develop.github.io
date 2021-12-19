import React from 'react';
import Timeline from '@mui/lab/Timeline';
import { History } from '@/types/history';
import HistoryTimelineItem from '@/components/model/history/HistoryTimelineItem';

export type HistoryTimelineProps = {
  histories: History[];
};

const HistoryTimeline: React.VFC<HistoryTimelineProps> = React.memo(props => {
  const { histories } = props;

  return (
    <Timeline position='alternate' sx={{ p: 0 }}>
      {histories.map((history, i) => (
        <HistoryTimelineItem
          key={history.title}
          history={history}
          connector={i + 1 !== histories.length}
        />
      ))}
    </Timeline>
  );
});

HistoryTimeline.displayName = 'HistoryTimeline';

export default HistoryTimeline;
