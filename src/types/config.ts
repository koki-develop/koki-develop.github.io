import { Profile } from '@/types/profile';
import { Socials } from '@/types/socials';
import { SkillGroup } from '@/types/skillGroup';
import { Work } from '@/types/work';
import { History } from '@/types/history';

export type Config = {
  url: string;
  profile: Profile;
  socials: Socials;
  skillGroups: SkillGroup[];
  works: Work[];
  histories: History[];
};
