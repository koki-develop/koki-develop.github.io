import { History } from '@/types/history';
import { Profile } from '@/types/profile';
import { SkillGroup } from '@/types/skillGroup';
import { Social } from '@/types/social';
import { Work } from '@/types/work';

export type Config = {
  url: string;
  profile: Profile;
  socials: Social[];
  skillGroups: SkillGroup[];
  works: Work[];
  histories: History[];
};
