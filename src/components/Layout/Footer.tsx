import React from 'react';
import FooterLinkList from '@/components/Layout/FooterLinkList';

const Footer: React.VFC = React.memo(() => {
  return (
    <footer className='mb-4 flex flex-col items-center p-4'>
      <small className='mb-2'>&copy;2021</small>

      <FooterLinkList />
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
