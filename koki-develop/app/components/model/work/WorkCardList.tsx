import React, { memo } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import WorkCard from '@/components/model/work/WorkCard';
import LinkButton from '@/components/utils/LinkButton';
import type { Work } from '@/types/work';
import { Routes } from '@/routes';

export type WorkCardListProps = {
  works: Work[];
};

const WorkCardList: React.VFC<WorkCardListProps> = memo(props => {
  const { works } = props;

  return (
    <div>
      <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {works.map(work => (
          <WorkCard key={work.name} work={work} />
        ))}
      </div>
      <div className='flex justify-center'>
        <LinkButton
          href={Routes.repositories()}
          external
          buttonProps={{
            size: 'large',
            endIcon: <IoChevronForward />,
          }}
        >
          More
        </LinkButton>
      </div>
    </div>
  );
});

WorkCardList.displayName = 'WorkCardList';

export default WorkCardList;
