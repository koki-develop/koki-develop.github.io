import React from 'react';
import FooterLinkList from '@/components/Layout/FooterLinkList';

const Footer: React.VFC = React.memo(() => {
  return (
    <footer className='flex flex-col items-center p-4'>
      <small>&copy;2021</small>

      <FooterLinkList />
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
