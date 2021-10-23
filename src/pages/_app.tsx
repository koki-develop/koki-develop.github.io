import React, { useEffect } from 'react';
import '../styles/global.scss';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'production') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, { page_path: router.pathname });
    }
  }, [router.pathname]);

  return (
    <Component {...pageProps} />
  );
};

export default App;
