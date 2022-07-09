import React, { memo } from 'react';
import type { Social } from '@/models/social';
import Link from '@/components/utils/Link';

export type SocialListProps = {
  socials: Social[];
};

const SocialList: React.FC<SocialListProps> = memo(props => {
  const { socials } = props;

  return (
    <ul className='mb-4 flex justify-center'>
      {socials.map(social => (
        <li key={social.name} className='mx-3'>
          <Link external href={social.url}>
            <img
              src={`/images/icons/${social.name}.svg`}
              alt={social.name}
              height={40}
              width={40}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
});

SocialList.displayName = 'SocialList';

export default SocialList;
