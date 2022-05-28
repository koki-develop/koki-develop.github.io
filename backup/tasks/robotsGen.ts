import fs from 'fs';
import path from 'path';

const content = `User-agent: *
Allow: /
Host: https://koki.me
Sitemap: https://koki.me/sitemap.xml`;

fs.writeFileSync(path.join(process.cwd(), 'public/robots.txt'), content);
