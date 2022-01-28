import React from 'react';
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import ServerStyleSheets from '@mui/styles/ServerStyleSheets';
import urlJoin from 'url-join';
import { config } from '@/config';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          {process.env.NEXT_PUBLIC_ENV === 'production' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUEMENT_ID}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                  `,
                }}
              ></script>
            </>
          )}

          <meta property='og:site_name' content={config.profile.name} />
          <meta name='description' content={config.profile.description} />
          <meta
            property='og:description'
            content={config.profile.description}
          />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await NextDocument.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
