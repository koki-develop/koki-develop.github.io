import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';
import Scroll from 'react-scroll';

const BackToTop: React.VFC = memo(() => {
  const [show, setShow] = useState<boolean>(false);

  const handleClickBackToTop = useCallback(() => {
    Scroll.animateScroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scroll = window.scrollY;
    setShow(scroll > 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <button
      className={classNames(
        'fixed right-4 bottom-4 z-50 rounded-full border bg-white p-5 shadow',
        {
          'animate-fade-in': show,
          'pointer-events-none animate-fade-out': !show,
        },
      )}
      onClick={handleClickBackToTop}
    >
      <IoChevronUp className='text-lg' />
    </button>
  );
});

BackToTop.displayName = 'BackToTop';

export default BackToTop;
