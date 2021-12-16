import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import urlJoin from 'url-join';
import { Skill } from '@/types/skill';
import ExternalLink from '@/components/utils/ExternalLink';
import FadeSlideUp from '@/components/utils/FadeSlideUp';

const useStyles = makeStyles(theme =>
  createStyles({
    skillLink: {
      '&:hover': {
        opacity: 1,
      },
    },
    skillCardContent: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1.2),
      },
    },
    skillCardImg: {
      marginBottom: theme.spacing(2),
      width: 60,
      height: 60,
      [theme.breakpoints.down('sm')]: {
        height: 40,
        marginBottom: theme.spacing(1),
        width: 40,
      },
    },
    skillCardName: {
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 'bold',
      whiteSpace: 'pre',
    },
  }),
);

export type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.VFC<SkillCardProps> = React.memo(props => {
  const classes = useStyles();

  const { skill } = props;

  return (
    <Grid key={skill.name} item xs={6} sm={3}>
      <ExternalLink className={classes.skillLink} href={skill.url}>
        <FadeSlideUp>
          <Card>
            <CardActionArea>
              <CardContent className={classes.skillCardContent}>
                <img
                  className={classes.skillCardImg}
                  src={urlJoin('/images/skills', `${skill.name}.svg`)}
                  alt={skill.name}
                />
                <Typography className={classes.skillCardName}>
                  {props.skill.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </FadeSlideUp>
      </ExternalLink>
    </Grid>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
