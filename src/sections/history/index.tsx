import React from 'react';
import { Config } from '../../config';
import Section from '../../components/section';
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
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
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

type HistorySectionProps = {
  config: Config;
};

const HistorySection: React.VFC<HistorySectionProps> = (props: HistorySectionProps) => {
  const classes = useStyles();

  return (
    <Section
      title='History'
      disablePadding
    >
      <Timeline
        className={classes.timeline}
        align='alternate'
      >
        {props.config.histories.map((history, i) => (
          <TimelineItem
            className={classes.timelineItem}
            key={history.title}
          >
            <TimelineSeparator>
              <TimelineDot
                color={i === 0 ? 'secondary' : undefined}
                variant={i === 0 ? undefined : 'outlined'}
              />
              {i !== props.config.histories.length - 1 && (
                <TimelineConnector/>
              )}
            </TimelineSeparator>
            <TimelineContent>
              <Card>
                <CardContent>
                  <Typography className={classes.period}>{history.period}</Typography>
                  <Typography className={classes.title}>{history.title}</Typography>
                  <Typography className={classes.description}>{history.description}</Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default HistorySection;
