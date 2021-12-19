import React from 'react';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { History } from '@/types/history';
import HistoryCard from '@/components/model/history/HistoryCard';

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
            flexDirection: 'row !important',
            '&::before': {
              flex: 0,
            },
          },
          [theme.breakpoints.down('sm')]: {
            '&::before': {
              padding: '6px 8px',
            },
          },
        })}
      >
        <TimelineSeparator>
          <TimelineDot
            variant={history.isActive ? undefined : 'outlined'}
            sx={{ backgroundColor: history.isActive ? 'red' : 'white' }}
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
