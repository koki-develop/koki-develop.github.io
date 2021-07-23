import * as fs from 'fs';
import config from '../config';

(async () => {
  const { description, email, socials, skillGroups, portfolios } = config;
  const lines = [];

  /*
   * Overview
   */
  lines.push('# Overview');
  lines.push('');
  lines.push(description);
  lines.push('');
  lines.push('[<img src="https://github-readme-stats.vercel.app/api?username=kou-pg-0131&show_icons=true&theme=dark"/>](https://github.com/kou-pg-0131?tab=repositories)');
  lines.push('');

  /*
   * Social
   */
  lines.push('# Social');
  lines.push('');
  for (const social of socials) {
    lines.push(
      `[<img src="./public${social.imgSrc}" alt="${social.name}" width="40" height="40"/>](${social.href})`,
    );
  }

  /*
   * Skill
   */
  lines.push('# Skill');
  lines.push('');
  for (const skillGroup of skillGroups) {
    lines.push(`## ${skillGroup.name}`);
    lines.push('');
    for (const skill of skillGroup.skills) {
      lines.push(
        `[<img src="./public${skill.imgSrc}" alt="${skill.name}" width="40" height="40"/>](${skill.href})`,
      );
    }
  }

  /*
   * Portfolio
   */
  lines.push('# Portfolio');
  lines.push('');
  for (const portfolio of portfolios) {
    lines.push(portfolio.url ? `## [${portfolio.title}](${portfolio.url})` : `## ${portfolio.title}`);
    lines.push('');
    lines.push(portfolio.description);
    lines.push('');
    lines.push(`[View on GitHub](${portfolio.githubUrl})`);
  }

  /*
   * Contact
   */
  lines.push('# Contact');
  lines.push('');
  lines.push(`[${email}](mailto:${email})`);

  // Update README
  fs.writeFileSync('README.md', lines.join('\n') + '\n');
})();
