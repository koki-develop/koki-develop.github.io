import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { SkillGroup } from '@/types/skillGroup';
import FadeSlideUp from '@/components/utils/FadeSlideUp';
import SkillCard from '@/components/model/skill/SkillCard';

const useStyles = makeStyles(theme =>
  createStyles({
    groupName: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
      textAlign: 'center',
    },
    skillsContainer: {
      marginBottom: theme.spacing(2),
    },
  }),
);

export type SkillCardListProps = {
  skillGroups: SkillGroup[];
};

const SkillCardList: React.VFC<SkillCardListProps> = React.memo(props => {
  const classes = useStyles();

  const { skillGroups } = props;

  return (
    <div>
      {skillGroups.map(group => (
        <div key={group.name}>
          <FadeSlideUp>
            <Typography className={classes.groupName}>{group.name}</Typography>
          </FadeSlideUp>
          <Grid className={classes.skillsContainer} container spacing={2}>
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
