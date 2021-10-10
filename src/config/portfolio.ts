import { Skill } from './skill';

export const Portfolio = {
  portfolio: {
    title: 'Koki Sato',
    description: '個人用ポートフォリオサイト。',
    imgSrc: '/images/portfolios/portfolio.png',
    url: 'https://koki.me',
    githubUrl: 'https://github.com/koki-develop/koki-develop',
    skills: [
      // language
      Skill.typescript,
      // framework/library
      Skill.react,
      Skill.nextjs,
      // cloud
      Skill.aws,
      Skill.vercel,
      // ci/cd
      Skill.githubactions,
    ],
  },
  lgtmGenerator: {
    title: 'LGTM Generator',
    description: 'シンプルな LGTM 画像生成サービス。',
    imgSrc: '/images/portfolios/lgtm-generator.png',
    url: 'https://lgtmgen.org',
    githubUrl: 'https://github.com/koki-develop/lgtm-generator',
    skills: [
      // language
      Skill.typescript,
      Skill.go,
      // framework/library
      Skill.react,
      Skill.nextjs,
      Skill.gin,
      // cloud
      Skill.vercel,
      Skill.gcp,
      Skill.aws,
      // ci/cd
      Skill.circleci,
      // other
      Skill.serverless,
      Skill.terraform,
    ],
  },
  qiitaLgtmRanking: {
    title: 'Qiita LGTM Ranking',
    description: 'Qiita の LGTM ランキング記事を毎日自動更新するシステム。',
    imgSrc: null,
    url: 'https://qiita.com/items/b6cfc81906990b3a3e72',
    githubUrl: 'https://github.com/koki-develop/qiita-lgtm-ranking',
    skills: [
      // language
      Skill.go,
      // framework/library
      // cloud
      Skill.aws,
      // ci/cd
      Skill.circleci,
      // other
      Skill.serverless,
    ],
  },
} as const;

export type Portfolio = typeof Portfolio[keyof typeof Portfolio];
