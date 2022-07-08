import React, { memo } from 'react';
import type { History } from '@/models/history';
import Card from '@/components/utils/Card';

export type HistoryCardProps = {
  history: History;
};

const HistoryCard: React.VFC<HistoryCardProps> = memo(props => {
  const { history } = props;

  return (
    <Card className='p-4'>
      <div>
        <p className='mb-2 text-xs text-gray-500'>
          {history.from} - {history.to ?? 'now'}
        </p>
        <h3 className='font-bold'>{history.title}</h3>
      </div>
    </Card>
  );
});

HistoryCard.displayName = 'HistoryCard';

export default HistoryCard;
