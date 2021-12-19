import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { History } from '@/types/history';
import FadeSlideUp from '@/components/utils/FadeSlideUp';

export type HistoryCardProps = {
  history: History;
};

const HistoryCard: React.VFC<HistoryCardProps> = React.memo(props => {
  const { history } = props;

  return (
    <FadeSlideUp>
      <Card>
        <CardContent>
          <Typography
            sx={theme => ({
              fontSize: theme => theme.typography.caption.fontSize,
              [theme.breakpoints.down('md')]: {
                textAlign: 'left !important' as 'left',
              },
            })}
          >
            {history.from} - {history.to}
          </Typography>
          <Typography
            sx={theme => ({
              fontSize: theme => theme.typography.body1.fontSize,
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
            sx={{
              fontSize: theme => theme.typography.body2.fontSize,
              textAlign: 'left !important' as 'left',
            }}
          >
            {history.description}
          </Typography>
        </CardContent>
      </Card>
    </FadeSlideUp>
  );
});

HistoryCard.displayName = 'HistoryCard';

export default HistoryCard;
