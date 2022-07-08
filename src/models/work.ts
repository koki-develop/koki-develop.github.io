import type { Skill } from '@/models/skill';

export type Work = {
  name: string;
  url: string;
  hasImage?: boolean;
  imagePosition?: 'bottom' | 'top';
  repositoryUrl: string;
  description: string;
  skills: Skill[];
};
