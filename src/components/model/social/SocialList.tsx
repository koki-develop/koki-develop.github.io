import React from 'react';
import Box from '@mui/material/Box';
import { Socials } from '@/types/socials';
import ExternalLink from '@/components/utils/ExternalLink';

export type SocialListProps = {
  socials: Socials;
};

const SocialList: React.VFC<SocialListProps> = React.memo(props => {
  const { socials } = props;

  return (
    <Box component='ul' sx={{ display: 'flex', justifyContent: 'center' }}>
      {Object.values(socials).map(social => (
        <Box key={social.name} component='li' sx={{ mx: 2 }}>
          <ExternalLink href={social.url}>
            <img
              src={social.imageUrl}
              alt={social.name}
              height={40}
              width={40}
            />
          </ExternalLink>
        </Box>
      ))}
    </Box>
  );
});

SocialList.displayName = 'SocialList';

export default SocialList;
