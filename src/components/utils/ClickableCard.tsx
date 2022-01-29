import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

export type ClickableCardProps = {
  children: React.ReactNode;
};

const ClickableCard: React.VFC<ClickableCardProps> = React.memo(props => {
  const { children } = props;

  return (
    <Card>
      <CardActionArea>{children}</CardActionArea>
    </Card>
  );
});

ClickableCard.displayName = 'ClickableCard';

export default ClickableCard;
