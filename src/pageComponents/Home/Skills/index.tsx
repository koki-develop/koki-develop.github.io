import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Config } from '@/types/config';
import Section from '@/components/utils/Section';
import FadeSlideUp from '@/components/utils/FadeSlideUp';
import SkillCard from './SkillCard';

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

export type SkillsSectionProps = {
  config: Config;
};

const SkillsSection: React.VFC<SkillsSectionProps> = React.memo(props => {
  const classes = useStyles();

  const { config } = props;

  return (
    <Section title='Skills'>
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
    </Section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
