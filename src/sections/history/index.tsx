import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import {
  Timeline,
  TimelineContent,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { Config } from '@/types/config';
import Section from '@/components/section';
import FadeSlideUp from '@/components/fadeSlideUp';

const useStyles = makeStyles(theme =>
  createStyles({
    timeline: {
      padding: 0,
    },
    timelineItem: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row !important',
        '&::before': {
          flex: 0,
        },
      },
      [theme.breakpoints.down('xs')]: {
        '&::before': {
          padding: '6px 8px',
        },
      },
    },
    period: {
      fontSize: theme.typography.caption.fontSize,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    title: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 'bold',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    description: {
      fontSize: theme.typography.body2.fontSize,
      textAlign: 'left !important' as 'left',
    },
  }),
);

export type HistorySectionProps = {
  config: Config;
};

const HistorySection: React.VFC<HistorySectionProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

  return (
    <Section
      title='History'
      disablePadding
    >
      <Timeline
        className={classes.timeline}
        align='alternate'
      >
        {config.histories.map((history, i) => (
          <TimelineItem
            className={classes.timelineItem}
            key={history.title}
          >
            <TimelineSeparator>
              <TimelineDot
                color={i === 0 ? 'secondary' : undefined}
                variant={i === 0 ? undefined : 'outlined'}
              />
              {i !== config.histories.length - 1 && (
                <TimelineConnector />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <FadeSlideUp>
                <Card>
                  <CardContent>
                    <Typography className={classes.period}>{history.from} - {history.to}</Typography>
                    <Typography className={classes.title}>{history.title}</Typography>
                    <Typography className={classes.description}>{history.description}</Typography>
                  </CardContent>
                </Card>
              </FadeSlideUp>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
});

HistorySection.displayName = 'HistorySection';

export default HistorySection;
