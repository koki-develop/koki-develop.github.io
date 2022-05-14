import Image from 'next/image';
import React, { memo } from 'react';
import urlJoin from 'url-join';
import Card from '@/components/utils/Card';
import Link from '@/components/utils/Link';
import { Skill } from '@/types/skill';

export type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.VFC<SkillCardProps> = memo(props => {
  const { skill } = props;

  return (
    <Link external href={skill.url}>
      <Card className='flex flex-col items-center p-2 py-3 transition hover:bg-gray-100'>
        <div className='relative mb-1 h-12 w-12 sm:h-14 sm:h-14 md:h-16 md:w-16'>
          <Image
            src={urlJoin('/images/icons', `${skill.name}.svg`)}
            layout='fill'
            alt={skill.name}
          />
        </div>
        <p className='text-sm font-bold'>{props.skill.name}</p>
      </Card>
    </Link>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
