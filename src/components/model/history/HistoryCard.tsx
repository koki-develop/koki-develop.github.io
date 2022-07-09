import React, { memo } from 'react';
import type { History } from '@/models/history';
import Card from '@/components/utils/Card';

export type HistoryCardProps = {
  history: History;
};

const HistoryCard: React.FC<HistoryCardProps> = memo(props => {
  const { history } = props;

  return (
    <Card className='p-4'>
      <div>
        <p className='mb-2 text-xs text-gray-500 lg:group-even:text-right'>
          {history.from} - {history.to ?? 'now'}
        </p>
        <div className='flex lg:group-even:justify-end'>
          <h3 className='font-bold'>{history.title}</h3>
        </div>
      </div>
    </Card>
  );
});

HistoryCard.displayName = 'HistoryCard';

export default HistoryCard;
