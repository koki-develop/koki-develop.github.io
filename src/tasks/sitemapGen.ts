import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import { Routes } from '@/routes';

const locations: string[] = [
  Routes.home({ full: true }),
  Routes.privacyPolicy({ full: true }),
];

const now = new Date().toISOString();

const template = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<% locations.forEach(function(location) { -%>
  <url>
      <loc><%= location %></loc>
      <lastmod>${now}</lastmod>
  </url>
<% }); -%>
</urlset>`.trim();

const sitemap = ejs.render(template, { locations });

const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
