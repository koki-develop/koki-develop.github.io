import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { Config } from '@/types/config';
import Section from '@/components/section';
import FadeSlideUp from '@/components/fadeSlideUp';
import SkillCard from './skillCard';

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
    <Section title='Skill'>
      {config.skillGroups.map(group => (
        <Box key={group.name}>
          <FadeSlideUp>
            <Typography className={classes.groupName}>{group.name}</Typography>
          </FadeSlideUp>
          <Grid
            className={classes.skillsContainer}
            container
            spacing={2}
          >
            {group.skills.map(skill => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </Grid>
        </Box>
      ))}
    </Section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
