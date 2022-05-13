import React from 'react';
import SkillCard from '@/components/model/skill/SkillCard';
import { SkillGroup } from '@/types/skillGroup';

export type SkillCardListProps = {
  skillGroups: SkillGroup[];
};

const SkillCardList: React.VFC<SkillCardListProps> = React.memo(props => {
  const { skillGroups } = props;

  return (
    <div>
      {skillGroups.map(group => (
        <div className='mb-4' key={group.name}>
          <h3 className='mb-2 text-center font-bold'>{group.name}</h3>
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
