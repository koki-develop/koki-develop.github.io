import React from 'react';
import WorkCard from '@/components/model/work/WorkCard';
import { Work } from '@/types/work';

export type WorkCardListProps = {
  works: Work[];
};

const WorkCardList: React.VFC<WorkCardListProps> = React.memo(props => {
  const { works } = props;

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {works.map(work => (
        <WorkCard key={work.name} work={work} />
      ))}
    </div>
  );
});

WorkCardList.displayName = 'WorkCardList';

export default WorkCardList;
