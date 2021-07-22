import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@material-ui/lab';
import { History } from '../domain';

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
    },
    timelineContent: {
    },
    period: {
      fontSize: 12,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    title: {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    description: {
      fontSize: 14,
      textAlign: 'left !important' as 'left',
    },
  }),
);

type Props = {
  histories: History[];
};

export const HistoryList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Timeline className={classes.timeline} align='alternate'>
      {props.histories.map((history, i) => (
        <TimelineItem key={history.title} className={classes.timelineItem}>
          <TimelineSeparator>
            <TimelineDot
              color={i === 0 ? 'secondary' : undefined}
              variant={i === 0 ? undefined : 'outlined'}
            />
            {(i !== (props.histories.length - 1) && (
              <TimelineConnector/>
            ))}
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Card>
              <CardContent>
                <p className={classes.period}>{history.period}</p>
                <h3 className={classes.title}>{history.title}</h3>
                {history.description && (
                  <p className={classes.description}>{history.description}</p>
                )}
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
