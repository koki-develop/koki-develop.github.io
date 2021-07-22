import {
  Social as SocialType,
  SkillGroup as SkillGroupType,
  History as HistoryType,
} from '../types';
import { Social } from './social';
import { SkillGroup } from './skill';
import { History } from './history';
import { Portfolio } from './portfolio';

export type Config = {
  name: string;
  description: string;
  email: string;
  socials: SocialType[];
  skillGroups: SkillGroupType[];
  portfolios: Portfolio[];
  histories: HistoryType[];
};

const config: Config = {
  name: 'Koki Sato',
  description: '埼玉県在住の23歳。\nのんびり生きています。',
  email: 'kou.pg.0131@gmail.com',
  socials: Object.values(Social),
  skillGroups: Object.values(SkillGroup),
  portfolios: Object.values(Portfolio),
  histories: Object.values(History),
};

export default config;
