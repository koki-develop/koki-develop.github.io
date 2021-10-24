import * as fs from 'fs';
import * as path from 'path';
import urlJoin from 'url-join';
import { ConfigLoader } from '@/lib/configLoader';

(async () => {
  const config = ConfigLoader.load();
  const lines = [];

  /*
   * Overview
   */
  lines.push('# Overview');
  lines.push('');
  lines.push(config.profile.description);
  lines.push('');
  lines.push('[<img src="https://github-readme-stats.vercel.app/api?username=koki-develop&show_icons=true&theme=dark"/>](https://github.com/koki-develop?tab=repositories&type=source)');
  lines.push('');

  /*
   * Social
   */
  lines.push('# Social');
  lines.push('');
  for (const social of Object.values(config.socials)) {
    lines.push(
      `[<img src="${path.join('./public/images/socials', `${social.name}.svg`)}" alt="${social.name}" width="40" height="40"/>](${social.url})`,
    );
  }

  /*
   * Skill
   */
  lines.push('# Skill');
  lines.push('');
  for (const skillGroup of config.skillGroups) {
    lines.push(`## ${skillGroup.name}`);
    lines.push('');
    for (const skill of skillGroup.skills) {
      lines.push(
        `[<img src="${path.join('./public/images/skills', skill.name)}" alt="${skill.name}" width="40" height="40"/>](${skill.url})`,
      );
    }
  }

  /*
   * Works
   */
  lines.push('# Works');
  lines.push('');
  for (const work of config.works) {
    lines.push(`## [${work.name}](${work.url})`);
    lines.push('');
    lines.push(work.description);
    lines.push('');
    lines.push(`[View on GitHub](${urlJoin(config.socials.github.url, work.repository)})`);
  }

  /*
   * Contact
   */
  lines.push('# Contact');
  lines.push('');
  lines.push(`[${config.profile.email}](mailto:${config.profile.email})`);

  // Update README
  fs.writeFileSync('README.md', lines.join('\n') + '\n');
})();
