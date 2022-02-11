import Box from '@mui/material/Box';
import React from 'react';
import Link from '@/components/utils/Link';
import { Social } from '@/types/social';

export type SocialListProps = {
  socials: Social[];
};

const SocialList: React.VFC<SocialListProps> = React.memo(props => {
  const { socials } = props;

  return (
    <Box component='ul' sx={{ display: 'flex', justifyContent: 'center' }}>
      {socials.map(social => (
        <Box key={social.name} component='li' sx={{ mx: 2 }}>
          <Link external href={social.url}>
            <img
              src={`/images/icons/${social.name}.svg`}
              alt={social.name}
              height={40}
              width={40}
            />
          </Link>
        </Box>
      ))}
    </Box>
  );
});

SocialList.displayName = 'SocialList';

export default SocialList;
