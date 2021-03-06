import React, { memo } from 'react';
import { Routes } from '@/routes';
import { config } from '@/config';
import Container from '@/components/utils/Container';
import Link from '@/components/utils/Link';

const Header: React.FC = memo(() => {
  return (
    <div className='sticky top-0 z-50 bg-white py-3 shadow md:static'>
      <Container>
        <Link
          className='inline-flex items-center align-middle'
          href={Routes.home()}
        >
          <img
            className='mr-1'
            height={40}
            width={40}
            src='/images/profile.png'
            alt=''
          />
          <h1 className='text-xl font-normal'>{config.profile.name}</h1>
        </Link>
      </Container>
    </div>
  );
});

Header.displayName = 'Header';

export default Header;
