import { Skill } from '@/types/skill';

export type Work = {
  name: string;
  url: string;
  hasImage: boolean;
  repositoryUrl: string;
  description: string;
  skills: Skill[];
};
