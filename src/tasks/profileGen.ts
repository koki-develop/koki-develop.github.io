import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import { config } from '@/config';

(async () => {
  const template = fs
    .readFileSync(path.join(process.cwd(), 'profile.template.md'))
    .toString();
  const profile = ejs.render(template, { config });

  fs.writeFileSync('profile.md', profile);
})();
