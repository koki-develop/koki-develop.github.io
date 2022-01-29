import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { History } from '@/types/history';

export type HistoryCardProps = {
  history: History;
};

const HistoryCard: React.VFC<HistoryCardProps> = React.memo(props => {
  const { history } = props;

  return (
    <Card>
      <CardContent>
        <Box
          sx={theme => ({
            [theme.breakpoints.down('md')]: {
              textAlign: 'left',
            },
          })}
        >
          <Typography variant='caption'>
            {history.from} - {history.to}
          </Typography>
          <Typography
            component='h2'
            variant='body1'
            sx={{ fontWeight: 'bold', my: 1 }}
          >
            {history.title}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant='body2'>{history.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
});

HistoryCard.displayName = 'HistoryCard';

export default HistoryCard;
