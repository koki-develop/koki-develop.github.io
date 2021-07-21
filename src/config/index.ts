import { Social as SocialType, SkillGroup as SkillGroupType, History as HistoryType } from '../domain';
import { Social } from './social';
import { SkillGroup } from './skill';
import { History } from './history';
import { Portfolio } from './portfolio';

export type Config = {
  socials: Readonly<SocialType[]>;
  skillGroups: Readonly<SkillGroupType[]>;
  portfolios: Readonly<Portfolio[]>;
  histories: Readonly<HistoryType[]>;
};

const config: Config = {
  socials: Object.values(Social),
  skillGroups: Object.values(SkillGroup),
  portfolios: Object.values(Portfolio),
  histories: Object.values(History),
};

export default config;
