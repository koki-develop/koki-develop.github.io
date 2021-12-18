import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { History } from '@/types/history';
import FadeSlideUp from '@/components/utils/FadeSlideUp';

export type HistoryTimelineProps = {
  histories: History[];
};

const HistoryTimeline: React.VFC<HistoryTimelineProps> = React.memo(props => {
  const { histories } = props;

  return (
    <Timeline position='alternate' sx={{ p: 0 }}>
      {histories.map((history, i) => (
        <TimelineItem
          key={history.title}
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
            {i !== histories.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <FadeSlideUp>
              <Card>
                <CardContent>
                  <Typography
                    sx={theme => ({
                      fontSize: theme.typography.caption.fontSize,
                      [theme.breakpoints.down('md')]: {
                        textAlign: 'left !important' as 'left',
                      },
                    })}
                  >
                    {history.from} - {history.to}
                  </Typography>
                  <Typography
                    sx={theme => ({
                      fontSize: theme.typography.body1.fontSize,
                      fontWeight: 'bold',
                      my: 1,
                      [theme.breakpoints.down('md')]: {
                        textAlign: 'left !important' as 'left',
                      },
                    })}
                  >
                    {history.title}
                  </Typography>
                  <Typography
                    sx={theme => ({
                      fontSize: theme.typography.body2.fontSize,
                      textAlign: 'left !important' as 'left',
                    })}
                  >
                    {history.description}
                  </Typography>
                </CardContent>
              </Card>
            </FadeSlideUp>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
});

HistoryTimeline.displayName = 'HistoryTimeline';

export default HistoryTimeline;
