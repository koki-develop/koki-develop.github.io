import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import { ConfigLoader } from '@/lib/configLoader';

(async () => {
  const config = ConfigLoader.load();

  const template = fs
    .readFileSync(path.join(process.cwd(), 'README.template.md'))
    .toString();
  const readme = ejs.render(template, { config });

  fs.writeFileSync('README.md', readme);
})();
