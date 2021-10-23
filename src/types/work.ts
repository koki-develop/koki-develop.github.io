import { Skill } from '@/types/skill';

export type Work = {
  name: string;
  url: string;
  hasImage: boolean;
  repository: string;
  description: string;
  skills: Skill[];
};
