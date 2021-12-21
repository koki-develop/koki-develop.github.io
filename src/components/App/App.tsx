import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import urlJoin from 'url-join';
import AppRoutes from '@/components/App/AppRoutes';
import { config } from '@/config';

const App: React.VFC = React.memo(() => {
  return (
    <BrowserRouter>
      <Helmet>
        {import.meta.env.VITE_ENV === 'production' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${
                import.meta.env.VITE_GA_MEASUREMENT_ID
              }`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID}');
                `,
              }}
            ></script>
          </>
        )}
        <meta property='og:site_name' content={config.profile.name} />
        <meta name='description' content={config.profile.description} />
        <meta property='og:description' content={config.profile.description} />
        <meta property='og:url' content={config.url} />
        <meta
          property='og:image'
          content={urlJoin(config.url, 'images/profile.jpg')}
        />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='ja_JP' />
        <meta property='twitter:card' content='summary' />
        <meta
          property='twitter:site'
          content={`@${config.socials.twitter.username}`}
        />
      </Helmet>
      <AppRoutes />
    </BrowserRouter>
  );
});

App.displayName = 'App';

export default App;
