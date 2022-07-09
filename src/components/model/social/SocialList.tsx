import React, { memo, useMemo } from 'react';
import type { Socials } from '@/models/social';
import Link from '@/components/utils/Link';

export type SocialListProps = {
  socials: Socials;
};

const SocialList: React.FC<SocialListProps> = memo(props => {
  const { socials } = props;

  const socialList = useMemo(() => {
    return Object.values(socials);
  }, [socials]);

  return (
    <ul className='mb-4 flex justify-center'>
      {socialList.map(social => (
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
