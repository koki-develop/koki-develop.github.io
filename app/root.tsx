import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';
import styles from '@/styles/app.compiled.css';
import Layout from '@/components/Layout';
import type { LinksFunction, MetaFunction } from '@remix-run/node';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Koki Sato',
  viewport: 'width=device-width,initial-scale=1',
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
