import React from 'react';
import { Typography, Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Skill } from '../../domain';
import ExternalLink from '../../components/externalLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(2),
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
      textAlign: 'center',
    },
    skillLink: {
      display: 'block',
      width: '100%',
      '&:hover': {
        opacity: 0.9,
      },
    },
    skillContent: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    skillImg: {
      marginBottom: theme.spacing(2),
      width: 60,
      height: 60,
    },
    skillName: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }),
);

type Props = {
  name: string;
  skills: Readonly<Skill[]>;
};

export const SkillCardList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.name}>{props.name}</Typography>
      <Grid className={classes.container} container spacing={2}>
        {props.skills.map(skill => (
          <Grid key={skill.name} item xs={6} sm={3}>
            <ExternalLink className={classes.skillLink} href={skill.href}>
              <Card>
                <CardActionArea>
                  <CardContent className={classes.skillContent}>
                    <img className={classes.skillImg} src={skill.imgSrc} alt={skill.name}/>
                    <div className={classes.skillName}>
                      {skill.name}
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ExternalLink>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkillCardList;
