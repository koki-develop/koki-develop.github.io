export type SkillGroup = {
  name: string;
  skills: Readonly<Skill[]>;
};

export type Skill = {
  name: string;
  imgSrc: string;
  href: string;
};
