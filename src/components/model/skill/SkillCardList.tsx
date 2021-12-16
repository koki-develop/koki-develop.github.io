import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Config } from '@/types/config';
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
  config: Config;
};

const SkillCardList: React.VFC<SkillCardListProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

  return (
    <div>
      {config.skillGroups.map(group => (
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
