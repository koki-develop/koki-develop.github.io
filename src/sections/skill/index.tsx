import React from 'react';
import { Config } from '../../config';
import Section from '../../components/section';
import SkillCardList from './skillCardList';

type SkillSectionProps = {
  config: Config;
};

const SkillSection: React.VFC<SkillSectionProps> = (props: SkillSectionProps) => {
  return (
    <Section title='Skill'>
      {props.config.skillGroups.map(group => (
        <SkillCardList
          key={group.name}
          name={group.name}
          skills={group.skills}
        />
      ))}
    </Section>
  );
};

export default SkillSection;
