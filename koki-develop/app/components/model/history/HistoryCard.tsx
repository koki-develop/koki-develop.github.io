import React, { memo } from 'react';
import Card from '@/components/utils/Card';
import type { History } from '@/types/history';

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
        <h3 className='mb-2 font-bold'>{history.title}</h3>
      </div>
      <div className='text-left text-sm'>
        <p className='font-light'>{history.description}</p>
      </div>
    </Card>
  );
});

HistoryCard.displayName = 'HistoryCard';

export default HistoryCard;
