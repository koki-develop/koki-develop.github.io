import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import urlJoin from 'url-join';
import { Skill } from '@/types/skill';
import ExternalLink from '@/components/utils/ExternalLink';

export type SkillAvatarGroupProps = {
  skills: Skill[];
};

const SkillAvatarGroup: React.VFC<SkillAvatarGroupProps> = React.memo(props => {
  const { skills } = props;

  return (
    <Box sx={{ my: { xs: 1, sm: 2 }, display: 'flex' }}>
      {skills.map((skill, i) => (
        <ExternalLink
          key={skill.name}
          href={skill.url}
          sx={{
            border: '1px solid #999',
            borderRadius: '50%',
            zIndex: skills.length - i,
            '&:hover': { opacity: 1, transform: 'translateY(-4px)' },
            '&:not(:first-of-type)': { ml: -1 },
          }}
        >
          <Avatar
            src={urlJoin('/images/skills', `${skill.name}.svg`)}
            alt={skill.name}
            sx={{
              backgroundColor: theme => theme.palette.common.white,
              height: {
                xs: 20,
                sm: 25,
              },
              width: {
                xs: 20,
                sm: 25,
              },
            }}
            imgProps={{
              style: { height: '100%', objectFit: 'contain', width: '100%' },
            }}
          />
        </ExternalLink>
      ))}
    </Box>
  );
});

SkillAvatarGroup.displayName = 'SkillAvatarGroup';

export default SkillAvatarGroup;
