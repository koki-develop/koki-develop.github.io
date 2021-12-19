import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Profile } from '@/types/profile';

export type ProfileBlockProps = {
  profile: Profile;
};

const ProfileBlock: React.VFC<ProfileBlockProps> = React.memo(props => {
  const { profile } = props;

  return (
    <Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          mb: 1,
        }}
      >
        <Box>
          <img
            height={150}
            width={150}
            src='/images/profile.png'
            alt={profile.name}
          />
        </Box>
        <Typography variant='h5'>{profile.name}</Typography>
        <Typography
          variant='h6'
          sx={{ color: theme => theme.palette.text.secondary }}
        >
          Developer
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ textAlign: 'center', whiteSpace: 'pre' }}>
          {profile.description}
        </Typography>
      </Box>
    </Box>
  );
});

ProfileBlock.displayName = 'ProfileBlock';

export default ProfileBlock;
