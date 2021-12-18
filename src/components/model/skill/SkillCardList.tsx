import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { SkillGroup } from '@/types/skillGroup';
import FadeSlideUp from '@/components/utils/FadeSlideUp';
import SkillCard from '@/components/model/skill/SkillCard';

export type SkillCardListProps = {
  skillGroups: SkillGroup[];
};

const SkillCardList: React.VFC<SkillCardListProps> = React.memo(props => {
  const { skillGroups } = props;

  return (
    <div>
      {skillGroups.map(group => (
        <div key={group.name}>
          <FadeSlideUp>
            <Typography sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
              {group.name}
            </Typography>
          </FadeSlideUp>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {group.skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
});

SkillCardList.displayName = 'SkillCardList';

export default SkillCardList;
