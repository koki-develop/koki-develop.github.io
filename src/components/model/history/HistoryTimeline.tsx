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
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { History } from '@/types/history';
import FadeSlideUp from '@/components/utils/FadeSlideUp';

const useStyles = makeStyles(theme =>
  createStyles({
    timeline: {
      padding: 0,
    },
    timelineItem: {
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
    },
    period: {
      fontSize: theme.typography.caption.fontSize,
      [theme.breakpoints.down('md')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    title: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 'bold',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    description: {
      fontSize: theme.typography.body2.fontSize,
      textAlign: 'left !important' as 'left',
    },
  }),
);

export type HistoryTimelineProps = {
  histories: History[];
};

const HistoryTimeline: React.VFC<HistoryTimelineProps> = React.memo(props => {
  const classes = useStyles();

  const { histories } = props;

  return (
    <Timeline className={classes.timeline} align='alternate'>
      {histories.map((history, i) => (
        <TimelineItem className={classes.timelineItem} key={history.title}>
          <TimelineSeparator>
            <TimelineDot
              color={history.isActive ? 'secondary' : undefined}
              variant={history.isActive ? undefined : 'outlined'}
            />
            {i !== histories.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <FadeSlideUp>
              <Card>
                <CardContent>
                  <Typography className={classes.period}>
                    {history.from} - {history.to}
                  </Typography>
                  <Typography className={classes.title}>
                    {history.title}
                  </Typography>
                  <Typography className={classes.description}>
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
