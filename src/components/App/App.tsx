import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const App: React.VFC<AppProps> = React.memo(({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV !== 'production') return;
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: router.pathname,
    });
  }, [router.pathname]);

  return <Component {...pageProps} />;
});

App.displayName = 'App';

export default App;
