import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import React from 'react';

export type ClickableCardProps = {
  children: React.ReactNode;
};

const ClickableCard: React.VFC<ClickableCardProps> = React.memo(props => {
  const { children } = props;

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea sx={{ height: '100%' }}>{children}</CardActionArea>
    </Card>
  );
});

ClickableCard.displayName = 'ClickableCard';

export default ClickableCard;
