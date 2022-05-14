import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createElement, memo, useEffect } from 'react';

const App: NextPage<AppProps> = memo(({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV !== 'production') return;
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: router.pathname,
    });
  }, [router.pathname]);

  return createElement(Component, pageProps);
});

App.displayName = 'App';

export default App;
