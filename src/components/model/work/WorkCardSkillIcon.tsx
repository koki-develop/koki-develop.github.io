import React, { memo } from 'react';
import { Skill } from '@/models/skill';
import Tooltip from '@/components/utils/Tooltip';

export type WorkCardSkillIconProps = {
  skill: Skill;
};

const WorkCardSkillIcon: React.FC<WorkCardSkillIconProps> = memo(props => {
  const { skill } = props;

  return (
    <Tooltip className='-ml-2 hover:z-50' text={skill.name}>
      <div className='h-6 w-6 overflow-hidden rounded-full border border-gray-400 bg-white transition'>
        <img
          className='h-full w-full'
          src={`/images/icons/${skill.name}.svg`}
          alt={skill.name}
        />
      </div>
    </Tooltip>
  );
});

WorkCardSkillIcon.displayName = 'WorkCardSkillIcon';

export default WorkCardSkillIcon;
