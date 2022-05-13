import React from 'react';
import Link from '@/components/utils/Link';
import { Social } from '@/types/social';

export type SocialListProps = {
  socials: Social[];
};

const SocialList: React.VFC<SocialListProps> = React.memo(props => {
  const { socials } = props;

  return (
    <ul className='flex justify-center'>
      {socials.map(social => (
        <li key={social.name} className='mx-4'>
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
