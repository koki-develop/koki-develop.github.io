import Box from '@mui/material/Box';
import React from 'react';
import Link from '@/components/utils/Link';
import { Socials } from '@/types/socials';

export type SocialListProps = {
  socials: Socials;
};

const SocialList: React.VFC<SocialListProps> = React.memo(props => {
  const { socials } = props;

  return (
    <Box component='ul' sx={{ display: 'flex', justifyContent: 'center' }}>
      {Object.values(socials).map(social => (
        <Box key={social.name} component='li' sx={{ mx: 2 }}>
          <Link external href={social.url}>
            <img
              src={social.imageUrl}
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
