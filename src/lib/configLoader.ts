import { Config } from '@/types/config';
import { Skill } from '@/types/skill';
import config from '@/config.json';

export class ConfigLoader {
  public static load(): Config {
    const skills: Skill[] = config.skillGroups.reduce((result, current) => {
      return [...result, current.skills];
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

    return {
      ...config,
      works,
    };
  }
}
