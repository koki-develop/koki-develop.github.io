import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import React from 'react';
import HistoryCard from '@/components/model/history/HistoryCard';
import { History } from '@/types/history';

export type HistoryTimelineItemProps = {
  history: History;
  connector: boolean;
};

const HistoryTimelineItem: React.VFC<HistoryTimelineItemProps> = React.memo(
  props => {
    const { history, connector } = props;

    return (
      <TimelineItem
        sx={theme => ({
          [theme.breakpoints.down('md')]: {
            '::before': {
              flex: 0,
              p: theme.spacing(1),
            },
          },
        })}
      >
        <TimelineSeparator>
          <TimelineDot
            variant={history.isActive ? 'filled' : 'outlined'}
            sx={{ backgroundColor: history.isActive ? 'red' : 'transparent' }}
          />
          {connector && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <HistoryCard history={history} />
        </TimelineContent>
      </TimelineItem>
    );
  },
);

HistoryTimelineItem.displayName = 'HistoryTimelineItem';

export default HistoryTimelineItem;
