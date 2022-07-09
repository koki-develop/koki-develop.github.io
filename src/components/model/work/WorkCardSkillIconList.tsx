import React, { memo, useMemo } from 'react';
import { Skill } from '@/models/skill';
import WorkCardSkillIcon from '@/components/model/work/WorkCardSkillIcon';

export type WorkCardSkillIconListProps = {
  skills: Skill[];
};

const WorkCardSkillIconList: React.FC<WorkCardSkillIconListProps> = memo(
  props => {
    const { skills } = props;

    const reversedSkills = useMemo(() => {
      return skills.concat().reverse();
    }, [skills]);

    return (
      <div className='mb-2 flex flex-row-reverse items-center justify-end pl-1'>
        {reversedSkills.map(skill => (
          <WorkCardSkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    );
  },
);

WorkCardSkillIconList.displayName = 'WorkCardSkillIconList';

export default WorkCardSkillIconList;
