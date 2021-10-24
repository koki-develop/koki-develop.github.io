import React from 'react';
import { Avatar } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { AvatarGroup } from '@material-ui/lab';
import urlJoin from 'url-join';
import { Skill } from '@/types/skill';
import ExternalLink from '@/components/ExternalLink';

const useStyles = makeStyles(theme =>
  createStyles({
    skillAvatarGroup: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    skillAvatar: {
      backgroundColor: theme.palette.common.white,
      height: 25,
      width: 25,
      [theme.breakpoints.down('xs')]: {
        height: 20,
        width: 20,
      },
    },
    skillAvatarImg: {
      height: '100%',
      objectFit: 'contain',
      width: '100%',
    },
    skillAvatarLink: {
      border: '1px solid #999',
      borderRadius: '50%',
      '&:hover': {
        opacity: 1,
        transform: 'translateY(-4px)',
      },
    },
  }),
);

export type SkillAvatarGroupProps = {
  skills: Skill[];
};

const SkillAvatarGroup: React.VFC<SkillAvatarGroupProps> = React.memo(props => {
  const classes = useStyles();

  return (
    <AvatarGroup
      className={classes.skillAvatarGroup}
      max={100}
    >
      {props.skills.map(skill => (
        <ExternalLink
          key={skill.name}
          className={classes.skillAvatarLink}
          href={skill.url}
        >
          <Avatar
            className={classes.skillAvatar}
            src={urlJoin('/images/skills', `${skill.name}.svg`)}
            alt={skill.name}
            imgProps={{ className: classes.skillAvatarImg }}
          />
        </ExternalLink>
      ))}
    </AvatarGroup>
  );
});

SkillAvatarGroup.displayName = 'SkillAvatarGroup';

export default SkillAvatarGroup;
