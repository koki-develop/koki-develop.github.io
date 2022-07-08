import React, { memo } from 'react';
import type { Work } from '@/models/work';
import Card from '@/components/utils/Card';
import Link from '@/components/utils/Link';
import Tooltip from '@/components/utils/Tooltip';

export type WorkCardProps = {
  work: Work;
};

const WorkCard: React.FC<WorkCardProps> = memo(props => {
  const { work } = props;

  return (
    <div>
      <Card>
        {work.hasImage && (
          <Link className='relative overflow-hidden' external href={work.url}>
            <div className='absolute h-36 w-full rounded-t bg-gray-500 opacity-0 transition hover:opacity-10 lg:h-48' />
            <div className='h-36 w-full lg:h-48'>
              <img
                className='h-full w-full rounded-t object-cover'
                style={{
                  objectPosition: work.imagePosition ?? 'center',
                }}
                src={`/images/works/${work.name}.png`}
                alt={work.name}
              />
            </div>
          </Link>
        )}
        <div className='p-2 px-4 pb-4 text-sm'>
          <h3 className='mb-1 text-2xl font-bold'>
            <Link external href={work.url}>
              {work.name}
            </Link>
          </h3>
          <div className='mb-2 flex flex-row-reverse items-center justify-end pl-1'>
            {work.skills
              .concat()
              .reverse()
              .map(skill => (
                <Tooltip
                  key={skill.name}
                  className='-ml-2 hover:z-50'
                  text={skill.name}
                >
                  <div className='h-6 w-6 overflow-hidden rounded-full border border-gray-400 bg-white transition'>
                    <img
                      className='h-full w-full'
                      src={`/images/icons/${skill.name}.svg`}
                      alt={skill.name}
                    />
                  </div>
                </Tooltip>
              ))}
          </div>
          <p className='mb-2'>{work.description}</p>

          <Link external href={work.repositoryUrl}>
            View on GitHub
          </Link>
        </div>
      </Card>
    </div>
  );
});

WorkCard.displayName = 'WorkCard';

export default WorkCard;
