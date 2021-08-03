import React from 'react';
import { Skill } from '../../../types/skill';
import ExternalLink from '../../../components/externalLink';
import FadeSlideUp from '../../../components/fadeSlideUp';
import {
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
    skillLink: {
      '&:hover': {
        opacity: 1,
      },
    },
    skillCardContent: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1.2),
      },
    },
    skillCardImg: {
      marginBottom: theme.spacing(2),
      width: 60,
      height: 60,
      [theme.breakpoints.down('xs')]: {
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

type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.VFC<SkillCardProps> = React.memo((props: SkillCardProps) => {
  const classes = useStyles();

  return (
    <Grid
      key={props.skill.name}
      item
      xs={6}
      sm={3}
    >
      <ExternalLink
        className={classes.skillLink}
        href={props.skill.href}
      >
        <FadeSlideUp>
          <Card>
            <CardActionArea>
              <CardContent className={classes.skillCardContent}>
                <img
                  className={classes.skillCardImg}
                  src={props.skill.imgSrc}
                  alt={props.skill.name}
                />
                <Typography className={classes.skillCardName}>{props.skill.name}</Typography>
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
