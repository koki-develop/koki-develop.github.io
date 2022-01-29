import urlJoin from 'url-join';
import config from '@/config.json';
import { Config } from '@/types/config';
import { Skill } from '@/types/skill';
import { Socials } from '@/types/socials';
import { History } from '@/types/history';

export class ConfigLoader {
  public static load(): Config {
    const socials: Socials = {
      github: {
        name: 'GitHub',
        username: config.socials.github.username,
        url: urlJoin('https://github.com', config.socials.github.username),
        imageUrl: '/images/icons/GitHub.svg',
      },
      twitter: {
        name: 'Twitter',
        username: config.socials.twitter.username,
        url: urlJoin('https://twitter.com', config.socials.twitter.username),
        imageUrl: '/images/icons/Twitter.svg',
      },
      zenn: {
        name: 'Zenn',
        username: config.socials.zenn.username,
        url: urlJoin('https://zenn.dev', config.socials.zenn.username),
        imageUrl: '/images/icons/Zenn.svg',
      },
    };

    const skills: Skill[] = config.skillGroups.reduce((result, current) => {
      return [...result, ...current.skills];
    }, []);

    const works = config.works.map(work => {
      return {
        ...work,
        skills: work.skills.map(skillName => {
          const skill = skills.find(skill => skill.name === skillName);
          if (!skill) {
            throw new Error(`skill not found: ${skillName}`);
          }
          return skill;
        }),
      };
    });

    const histories: History[] = config.histories.map(history => {
      return { ...history, isActive: history.to === 'now' };
    });

    return {
      ...config,
      socials,
      works,
      histories,
    };
  }
}
