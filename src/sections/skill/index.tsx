import React from 'react';
import { Config } from '../../config';
import Section from '../../components/section';
import ExternalLink from '../../components/externalLink';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
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
    skillLink: {
      '&:hover': {
        opacity: 1,
      },
    },
    skillCardContent: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    skillCardImg: {
      marginBottom: theme.spacing(2),
      width: 60,
      height: 60,
    },
    skillCardName: {
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 'bold',
    },
  }),
);

type SkillSectionProps = {
  config: Config;
};

const SkillSection: React.VFC<SkillSectionProps> = (props: SkillSectionProps) => {
  const classes = useStyles();

  return (
    <Section title='Skill'>
      {props.config.skillGroups.map(group => (
        <Box key={group.name}>
          <Typography className={classes.groupName}>{group.name}</Typography>
          <Grid
            className={classes.skillsContainer}
            container
            spacing={2}
          >
            {group.skills.map(skill => (
              <Grid
                key={skill.name}
                item
                xs={6}
                sm={3}
              >
                <ExternalLink
                  className={classes.skillLink}
                  href={skill.href}
                >
                  <Card>
                    <CardActionArea>
                      <CardContent className={classes.skillCardContent}>
                        <img
                          className={classes.skillCardImg}
                          src={skill.imgSrc}
                          alt={skill.name}
                        />
                        <Typography className={classes.skillCardName}>{skill.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </ExternalLink>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Section>
  );
};

export default SkillSection;
