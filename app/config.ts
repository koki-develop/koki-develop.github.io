import type { History } from '@/types/history';
import type { Profile } from '@/types/profile';
import type { SkillGroup } from '@/types/skillGroup';
import type { Social } from '@/types/social';
import type { Work } from '@/types/work';

const profile: Profile = {
  name: 'Koki Sato',
  tag: 'Developer',
  email: 'kou.pg.0131@gmail.com',
  description: '埼玉県在住の24歳。\nのんびり生きています。',
};

const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/koki-develop' },
  { name: 'Twitter', url: 'https://twitter.com/koki_develop' },
  { name: 'Zenn', url: 'https://zenn.dev/kou_pg_0131' },
];

const skills = {
  // Languages
  Go: { name: 'Go', url: 'https://golang.org/' },
  TypeScript: { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  JavaScript: {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Ruby: { name: 'Ruby', url: 'https://www.ruby-lang.org/ja/' },
  Python: { name: 'Python', url: 'https://www.python.org/' },

  // Framework / Library
  Gin: { name: 'Gin', url: 'https://gin-gonic.com/' },
  chi: { name: 'chi', url: 'https://go-chi.io/' },
  Express: { name: 'Express', url: 'https://expressjs.com/' },
  React: { name: 'React', url: 'https://reactjs.org/' },
  Nextjs: { name: 'Next.js', url: 'https://nextjs.org/' },
  Remix: { name: 'Remix', url: 'https://remix.run/' },
  Rails: { name: 'Rails', url: 'https://rubyonrails.org/' },
  Django: { name: 'Django', url: 'https://docs.djangoproject.com/' },

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
  Heroku: { name: 'Heroku', url: 'https://www.heroku.com/' },
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
    skills: [
      skills.Go,
      skills.TypeScript,
      skills.JavaScript,
      skills.Ruby,
      skills.Python,
    ],
  },
  {
    name: 'Framework/Library',
    skills: [
      skills.Gin,
      skills.chi,
      skills.Express,
      skills.React,
      skills.Nextjs,
      skills.Remix,
      skills.Rails,
      skills.Django,
    ],
  },
  {
    name: 'RDB/NoSQL',
    skills: [skills.MySQL, skills.PostgreSQL, skills.SQLite, skills.Redis],
  },
  {
    name: 'Cloud',
    skills: [skills.AWS, skills.GCP, skills.Vercel, skills.Heroku],
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
    repositoryUrl: 'https://github.com/koki-develop/koki-develop',
    hasImage: true,
    description: '個人用ポートフォリオサイト。',
    skills: [
      // Languages
      skills.TypeScript,
      // Framework / Library
      skills.React,
      skills.Remix,
      // RDB / NoSQL
      // Cloud
      skills.Vercel,
      // CI / CD
      skills.GitHubActions,
      // Other
      skills.TailwindCSS,
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
];

const histories: History[] = [
  {
    title: 'DX 推進企業に業務委託として勤務',
    from: '2021-08',
    description: '業務改善ツールの新規機能開発・保守を担当。',
  },
  {
    title: 'デジタルマーケティング企業に入社',
    from: '2019-07',
    description:
      'ジオターゲティング広告配信システムの管理画面や MEO 対策支援ツール等の新規機能開発・保守を担当。',
  },
  {
    title: '未経験で SES 企業に入社',
    from: '2018-06',
    to: '2019-05',
    description:
      '自社にて 3 ヶ月の研修を受けたのち、都内の某信託銀行にて常駐勤務。従業員向けの顧客管理システムの新規開発を担当。',
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
