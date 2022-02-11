import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import SkillCard from '@/components/model/skill/SkillCard';
import { SkillGroup } from '@/types/skillGroup';

export type SkillCardListProps = {
  skillGroups: SkillGroup[];
};

const SkillCardList: React.VFC<SkillCardListProps> = React.memo(props => {
  const { skillGroups } = props;

  return (
    <Box>
      {skillGroups.map(group => (
        <Box key={group.name}>
          <Typography
            variant='body1'
            component='h2'
            sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}
          >
            {group.name}
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {group.skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
});

SkillCardList.displayName = 'SkillCardList';

export default SkillCardList;
