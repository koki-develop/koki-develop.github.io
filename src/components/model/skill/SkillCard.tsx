import React from 'react';
import urlJoin from 'url-join';
import Link from '@/components/utils/Link';
import { Skill } from '@/types/skill';

export type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.VFC<SkillCardProps> = React.memo(props => {
  const { skill } = props;

  return (
    <div>
      <Link external href={skill.url}>
        <div className='rounded bg-white shadow transition hover:bg-gray-100'>
          <div className='flex flex-col items-center p-2 md:py-3'>
            <img
              className='mb-1 h-12 w-12 sm:h-14 sm:h-14 md:h-16 md:w-16'
              src={urlJoin('/images/icons', `${skill.name}.svg`)}
              alt={skill.name}
            />
            <p className='text-sm font-bold'>{props.skill.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
