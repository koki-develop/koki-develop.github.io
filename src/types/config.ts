import { History } from '@/types/history';
import { Profile } from '@/types/profile';
import { SkillGroup } from '@/types/skillGroup';
import { Socials } from '@/types/socials';
import { Work } from '@/types/work';

export type Config = {
  url: string;
  profile: Profile;
  socials: Socials;
  skillGroups: SkillGroup[];
  works: Work[];
  histories: History[];
};
