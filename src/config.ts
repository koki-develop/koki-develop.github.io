import type { History } from '@/models/history';
import type { Profile } from '@/models/profile';
import type { SkillGroup } from '@/models/skillGroup';
import type { Socials } from '@/models/social';
import type { Work } from '@/models/work';

const profile: Profile = {
  name: 'Koki Sato',
  tag: 'Developer',
  email: 'kou.pg.0131@gmail.com',
  description: '埼玉県在住の24歳。\nのんびり生きています。',
};

const socials: Socials = {
  github: { name: 'GitHub', url: 'https://github.com/koki-develop' },
  twitter: { name: 'Twitter', url: 'https://twitter.com/koki_develop' },
  zenn: { name: 'Zenn', url: 'https://zenn.dev/kou_pg_0131' },
};

const skills = {
  // Languages
  Go: { name: 'Go', url: 'https://golang.org/' },
  TypeScript: { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  JavaScript: {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },

  // Framework / Library
  Gin: { name: 'Gin', url: 'https://gin-gonic.com/' },
  Express: { name: 'Express', url: 'https://expressjs.com/' },
  React: { name: 'React', url: 'https://reactjs.org/' },
  Nextjs: { name: 'Next.js', url: 'https://nextjs.org/' },
  Remix: { name: 'Remix', url: 'https://remix.run/' },

  // RDB / NoSQL
  MySQL: { name: 'MySQL', url: 'https://www.mysql.com/' },
  PostgreSQL: { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
  SQLite: { name: 'SQLite', url: 'http://www.sqlite.org/' },
  Redis: { name: 'Redis', url: 'https://redis.io/' },

  // Cloud
  AWS: { name: 'AWS', url: 'https://aws.amazon.com/' },
  GCP: { name: 'GCP', url: 'https://console.cloud.google.com/' },
  Firebase: { name: 'Firebase', url: 'https://firebase.google.com/' },
  Vercel: { name: 'Vercel', url: 'https://vercel.com/' },
  CloudFlare: { name: 'CloudFlare', url: 'https://www.cloudflare.com/' },

  // CI / CD
  CircleCI: { name: 'CircleCI', url: 'https://circleci.com/' },
  GitHubActions: {
    name: 'GitHub Actions',
    url: 'https://github.co.jp/features/actions',
  },

  // Other
  Docker: { name: 'Docker', url: 'https://www.docker.com/' },
  Serverless: { name: 'Serverless', url: 'https://www.serverless.com/' },
  Terraform: { name: 'Terraform', url: 'https://www.terraform.io/' },
  GraphQL: { name: 'GraphQL', url: 'https://graphql.org/' },
  Cypress: { name: 'Cypress', url: 'https://www.cypress.io/' },
  TailwindCSS: { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  Vite: { name: 'Vite', url: 'https://vitejs.dev/' },
  Webpack: { name: 'Webpack', url: 'https://webpack.js.org/' },
} as const;

const skillGroups: SkillGroup[] = [
  {
    name: 'Language',
    skills: [skills.Go, skills.TypeScript, skills.JavaScript],
  },
  {
    name: 'Framework/Library',
    skills: [
      skills.Gin,
      skills.Express,
      skills.React,
      skills.Nextjs,
      skills.Remix,
    ],
  },
  {
    name: 'RDB/NoSQL',
    skills: [skills.MySQL, skills.PostgreSQL, skills.SQLite, skills.Redis],
  },
  {
    name: 'Cloud',
    skills: [skills.AWS, skills.GCP],
  },
  {
    name: 'CI/CD',
    skills: [skills.CircleCI, skills.GitHubActions],
  },
  {
    name: 'Other',
    skills: [
      skills.Docker,
      skills.Serverless,
      skills.Terraform,
      skills.GraphQL,
      skills.Cypress,
    ],
  },
];

const works: Work[] = [
  {
    name: 'Koki Sato',
    url: 'https://koki.me',
    repositoryUrl: 'https://github.com/koki-develop/koki-develop.github.io',
    hasImage: true,
    description: '個人用ポートフォリオサイト。',
    skills: [
      // Languages
      skills.TypeScript,
      // Framework / Library
      skills.React,
      // RDB / NoSQL
      // Cloud
      // CI / CD
      skills.GitHubActions,
      // Other
      skills.TailwindCSS,
      skills.Vite,
    ],
  },
  {
    name: 'LGTM Generator',
    url: 'https://lgtmgen.org',
    repositoryUrl: 'https://github.com/koki-develop/lgtm-generator',
    hasImage: true,
    imagePosition: 'top',
    description: 'LGTM 画像生成ツール。',
    skills: [
      // Languages
      skills.Go,
      skills.TypeScript,
      // Framework / Library
      skills.Gin,
      skills.React,
      skills.Nextjs,
      // RDB / NoSQL
      // Cloud
      skills.AWS,
      skills.Vercel,
      // CI / CD
      skills.CircleCI,
      // Other
      skills.Docker,
      skills.Serverless,
      skills.Terraform,
      skills.Cypress,
    ],
  },
  {
    name: 'Todo Box',
    url: 'https://todobox.xyz',
    repositoryUrl: 'https://github.com/koki-develop/todobox',
    hasImage: true,
    imagePosition: 'top',
    description: 'Todo アプリ。 (開発中) ',
    skills: [
      // Languages
      skills.TypeScript,
      // Framework / Library
      skills.React,
      // RDB / NoSQL
      // Cloud
      skills.AWS,
      skills.Firebase,
      // CI / CD
      skills.GitHubActions,
      // Other
      skills.Terraform,
      skills.Vite,
    ],
  },
  {
    name: 'OGP Messenger',
    url: 'https://ogp-messenger.koki-develop.workers.dev',
    repositoryUrl: 'https://github.com/koki-develop/ogp-messenger',
    hasImage: true,
    description: 'OGP 画像でメッセージを発信できるツール。',
    skills: [
      // Languages
      skills.TypeScript,
      // Framework / Library
      skills.React,
      skills.Remix,
      // RDB / NoSQL
      // Cloud
      skills.CloudFlare,
      // CI / CD
      skills.GitHubActions,
      // Other
      skills.TailwindCSS,
    ],
  },
  {
    name: 'Awesome Notes',
    url: 'https://chrome.google.com/webstore/detail/awesome-notes/oahbimjdpmgidnloajppdlhlpkepmipo',
    repositoryUrl: 'https://github.com/koki-develop/awesome-notes',
    hasImage: true,
    imagePosition: 'top',
    description:
      'マークダウンショートカット機能つきのシンプルなメモを提供する Chrome Extension 。',
    skills: [
      // Languages
      skills.TypeScript,
      // Framework / Library
      skills.React,
      // RDB / NoSQL
      // Cloud
      // CI / CD
      // Other
      skills.Vite,
    ],
  },
  {
    name: 'Qiita LGTM Ranking',
    url: 'https://qiita.com/items/b6cfc81906990b3a3e72',
    repositoryUrl: 'https://github.com/koki-develop/qiita-lgtm-ranking',
    hasImage: true,
    description: 'Qiita の LGTM ランキング記事を毎日自動更新するシステム。',
    skills: [
      // Languages
      skills.Go,
      // Framework / Library
      // RDB / NoSQL
      // Cloud
      skills.AWS,
      // CI / CD
      skills.CircleCI,
      // Other
      skills.Serverless,
      skills.Terraform,
    ],
  },
  {
    name: 'Hyper Statusbar',
    url: 'https://github.com/koki-develop/hyper-statusbar#readme',
    repositoryUrl: 'https://github.com/koki-develop/hyper-statusbar',
    hasImage: true,
    imagePosition: 'bottom',
    description: 'ステータスバーを表示する Hyper プラグイン。',
    skills: [
      // Languages
      skills.TypeScript,
      // Framework / Library
      skills.React,
      // RDB / NoSQL
      // Cloud
      // CI / CD
      // Other
      skills.Webpack,
    ],
  },
  {
    name: 'docker-tags',
    url: 'https://github.com/koki-develop/docker-tags#readme',
    repositoryUrl: 'https://github.com/koki-develop/docker-tags',
    description: 'Docker イメージのタグ一覧を出力する CLI ツール。',
    skills: [
      // Languages
      skills.Go,
      // Framework / Library
      // RDB / NoSQL
      // Cloud
      // CI / CD
      skills.GitHubActions,
      // Other
    ],
  },
  {
    name: 'CheckIP',
    url: 'https://checkip.dev',
    repositoryUrl: 'https://github.com/koki-develop/checkip',
    hasImage: false,
    description: 'クライアントの IP アドレスを返す API 。',
    skills: [
      // Languages
      // Framework / Library
      // RDB / NoSQL
      // Cloud
      skills.AWS,
      // CI / CD
      // Other
      skills.Terraform,
    ],
  },
];

const histories: History[] = [
  {
    title: '株式会社スリーシェイクに入社',
    from: '2022-06',
  },
  {
    title: '株式会社レッドジャーニーにて業務委託として勤務',
    from: '2021-08',
    to: '2022-05',
  },
  {
    title: '株式会社オプトに入社',
    from: '2019-07',
    to: '2022-05',
  },
  {
    title: '未経験で SES 企業に入社',
    from: '2018-06',
    to: '2019-05',
  },
];

export const config = {
  url: 'https://koki.me',
  profile,
  socials,
  skillGroups,
  works,
  histories,
};
