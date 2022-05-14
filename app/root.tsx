import path from 'path';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
  useLoaderData,
} from '@remix-run/react';
import { memo, useEffect, useMemo } from 'react';
import { config } from '@/config';
import styles from '@/styles/app.compiled.css';
import Layout from '@/components/Layout';
import ErrorPage from '@/components/pages/ErrorPage';
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';

const urlJoin = (urlString: string, ...paths: string[]): string => {
  const url = new URL(urlString);
  url.pathname = path.join(url.pathname, ...paths);
  return url.href;
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = ({ location }) => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',

  title: 'Koki Sato',
  'og:title': 'Koki Sato',

  description: config.profile.description,
  'og:description': config.profile.description,

  'og:site_name': config.profile.name,
  'og:url': urlJoin(config.url, location.pathname),
  'og:type': 'website',
  'og:locale': 'ja_JP',
  'og:image': urlJoin(config.url, 'images/profile.jpg'),

  'twitter:card': 'summary',
  'twitter:site': '@koki_develop',
});

type LoaderData = {
  stage: 'development' | 'production';
  gaMeasurementId: string;
  pathname: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  return json<LoaderData>({
    stage: process.env.STAGE,
    gaMeasurementId: process.env.GA_MEASUREMENT_ID,
    pathname: url.pathname,
  });
};

export const CatchBoundary = memo(() => {
  const caught = useCatch();

  const message = useMemo(() => {
    switch (caught.status) {
      case 404:
        return 'お探しのページは見つかりませんでした';
      default:
        return '予期しないエラーが発生しました';
    }
  }, [caught.status]);

  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <ErrorPage message={message} />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
});

CatchBoundary.displayName = 'CatchBoundary';

export default function App() {
  const { stage, gaMeasurementId, pathname } = useLoaderData<LoaderData>();

  useEffect(() => {
    if (stage !== 'production') return;
    window.gtag('config', gaMeasurementId, {
      page_path: pathname,
    });
  }, [gaMeasurementId, pathname, stage]);

  return (
    <html lang='ja'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        {stage === 'production' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${gaMeasurementId}');
                  `,
              }}
            />
          </>
        )}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
