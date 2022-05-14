import path from 'path';
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';
import { config } from '@/config';
import styles from '@/styles/app.compiled.css';
import Layout from '@/components/Layout';
import type { LinksFunction, MetaFunction } from '@remix-run/node';

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

export default function App() {
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
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
