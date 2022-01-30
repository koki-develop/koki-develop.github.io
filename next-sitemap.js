const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = {
  siteUrl: 'https://koki.me',
  generateRobotsTxt: true,
  transform: async (_config, pathname) => {
    // /notes/{slug}
    const matches = pathname.match(/^\/notes\/([a-zA-Z-]+)$/);
    if (matches) {
      const slug = matches[1];
      const filepath = path.join(process.cwd(), 'src/notes', `${slug}.md`);
      const content = fs.readFileSync(filepath);
      const mattered = matter(content);

      return {
        loc: pathname,
        lastmod: mattered.data.updatedAt.toISOString(),
      };
    }

    return {
      loc: pathname,
      lastmod: new Date().toISOString(),
    };
  },
};
