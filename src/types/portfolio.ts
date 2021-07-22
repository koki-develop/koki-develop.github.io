import { Skill } from '.';

export type Portfolio = {
  title: string;
  description: string;
  imgSrc?: string;
  url?: string;
  githubUrl: string;
  skills: Skill[];
};
