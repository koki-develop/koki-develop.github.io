import React, { memo } from 'react';
import urlJoin from 'url-join';
import type { Work } from '@/types/work';
import Card from '@/components/utils/Card';
import Link from '@/components/utils/Link';

export type WorkCardProps = {
  work: Work;
};

const WorkCard: React.VFC<WorkCardProps> = memo(props => {
  const { work } = props;

  return (
    <Card className='overflow-hidden'>
      {work.hasImage && (
        <Link className='relative' external href={work.url}>
          <div className='absolute h-36 w-full bg-gray-500 opacity-0 transition hover:opacity-10' />
          <div className='h-36 w-full'>
            <img
              className='h-full w-full object-cover'
              style={{
                objectPosition: work.imagePosition ?? 'center',
              }}
              src={urlJoin('/images/works', `${work.name}.png`)}
              alt={work.name}
            />
          </div>
        </Link>
      )}
      <div className='p-2 px-4 pb-4 text-sm'>
        <h3 className='mb-2 text-2xl font-bold'>
          <Link external href={work.url}>
            {work.name}
          </Link>
        </h3>
        <p className='mb-2'>{work.description}</p>
        <Link external href={work.repositoryUrl}>
          View on GitHub
        </Link>
      </div>
    </Card>
  );
});

WorkCard.displayName = 'WorkCard';

export default WorkCard;
