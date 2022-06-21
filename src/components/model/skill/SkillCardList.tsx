import React, { memo } from 'react';
import type { SkillGroup } from '@/types/skillGroup';
import SkillCard from '@/components/model/skill/SkillCard';

export type SkillCardListProps = {
  skillGroups: SkillGroup[];
};

const SkillCardList: React.VFC<SkillCardListProps> = memo(props => {
  const { skillGroups } = props;

  return (
    <div className='mb-4'>
      {skillGroups.map(group => (
        <div className='mb-4' key={group.name}>
          <h3 className='mb-2 text-center'>{group.name}</h3>
          <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4'>
            {group.skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

SkillCardList.displayName = 'SkillCardList';

export default SkillCardList;
