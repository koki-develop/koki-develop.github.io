import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';
import Scroll from 'react-scroll';

const BackToTop: React.VFC = React.memo(() => {
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
        'bg-white rounded-full z-50 fixed right-4 bottom-4 p-5 border shadow-lg',
        {
          'animate-fade-in': show,
          'animate-fade-out pointer-events-none': !show,
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
