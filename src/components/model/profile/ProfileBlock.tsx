import React, { memo } from 'react';
import type { Profile } from '@/models/profile';

export type ProfileBlockProps = {
  profile: Profile;
};

const ProfileBlock: React.FC<ProfileBlockProps> = memo(props => {
  const { profile } = props;

  return (
    <div className='mb-4'>
      <div className='mb-2 flex flex-col items-center'>
        <div>
          <img src='/images/profile.png' height={150} width={150} alt='' />
        </div>

        <h2 className='text-2xl'>{profile.name}</h2>
        <p className='text-xl text-gray-500'>Developer</p>
      </div>

      <div className='flex justify-center'>
        <p className='whitespace-pre text-center'>{profile.description}</p>
      </div>
    </div>
  );
});

ProfileBlock.displayName = 'ProfileBlock';

export default ProfileBlock;
