import React from 'react';
import { Profile } from '@/types/profile';

export type ProfileBlockProps = {
  profile: Profile;
};

const ProfileBlock: React.VFC<ProfileBlockProps> = React.memo(props => {
  const { profile } = props;

  return (
    <div className='mb-4'>
      <div className='mb-2 flex flex-col items-center'>
        <div>
          <img
            src='/images/profile.png'
            style={{ height: 150, width: 150 }}
            alt={profile.name}
          />
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
