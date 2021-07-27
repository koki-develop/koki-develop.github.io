import React from 'react';
import config from '../../config';
import Section from '../../components/section';
import FadeSlideUp from '../../components/fadeSlideUp';
import SkillCard from './skillCard';
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
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

const SkillSection: React.VFC = React.memo(() => {
  const classes = useStyles();

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

SkillSection.displayName = 'SkillSection';

export default SkillSection;
