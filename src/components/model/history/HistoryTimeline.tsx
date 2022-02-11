import Timeline from '@mui/lab/Timeline';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import HistoryTimelineItem from '@/components/model/history/HistoryTimelineItem';
import { History } from '@/types/history';

export type HistoryTimelineProps = {
  histories: History[];
};

const HistoryTimeline: React.VFC<HistoryTimelineProps> = React.memo(props => {
  const { histories } = props;

  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Timeline position={isMdDown ? 'right' : 'alternate'} sx={{ p: 0 }}>
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
