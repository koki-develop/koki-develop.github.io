import {
  Social as SocialType,
  SkillGroup as SkillGroupType,
  History as HistoryType,
} from '../lib';
import { Social } from './social';
import { SkillGroup } from './skill';
import { History } from './history';
import { Portfolio } from './portfolio';

export type Config = {
  email: string;
  socials: SocialType[];
  skillGroups: SkillGroupType[];
  portfolios: Portfolio[];
  histories: HistoryType[];
};

const config: Config = {
  email: 'kou.pg.0131@gmail.com',
  socials: Object.values(Social),
  skillGroups: Object.values(SkillGroup),
  portfolios: Object.values(Portfolio),
  histories: Object.values(History),
};

export default config;
