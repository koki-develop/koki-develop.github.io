import React from 'react';
import { Skill } from '../../types/skill';
import ExternalLink from '../../components/externalLink';
import { Avatar } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skillAvatarGroup: {
      marginBottom: theme.spacing(2),
    },
    skillAvatar: {
      backgroundColor: theme.palette.common.white,
      height: 25,
      width: 25,
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

type SkillAvatarGroupProps = {
  skills: Readonly<Skill[]>;
};

const SkillAvatarGroup: React.VFC<SkillAvatarGroupProps> = (props: SkillAvatarGroupProps) => {
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
          href={skill.href}
        >
          <Avatar
            className={classes.skillAvatar}
            src={skill.imgSrc}
            alt={skill.name}
            imgProps={{ className: classes.skillAvatarImg }}
          />
        </ExternalLink>
      ))}
    </AvatarGroup>
  );
};

export default SkillAvatarGroup;
