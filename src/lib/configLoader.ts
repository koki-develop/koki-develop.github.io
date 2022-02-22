import { Config } from '@/types/config';
import { History } from '@/types/history';
import { Skill } from '@/types/skill';
import { Work } from '@/types/work';
import config from '@/config.json';

export class ConfigLoader {
  public static load(): Config {
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
      works: works as Work[],
      histories,
    };
  }
}
