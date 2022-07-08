import * as fs from 'fs';
import * as path from 'path';
import * as Parser from 'rss-parser';

(async () => {
  const parser = new Parser();
  const { items } = await parser.parseURL('https://zenn.dev/kou_pg_0131/feed');
  fs.writeFileSync(
    path.join(process.cwd(), 'src/notes.json'),
    JSON.stringify(
      items.map(({ guid, title, link, isoDate }) => ({
        guid,
        title,
        link,
        isoDate,
      })),
    ),
  );
})();
