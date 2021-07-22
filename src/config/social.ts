import { Social as SocialType } from '../lib';

export const Social: { [name:string]: SocialType } = {
  github: {
    href: 'https://github.com/kou-pg-0131',
    name: 'GitHub',
    imgSrc: '/images/socials/github.svg',
  },
  twitter: {
    name: 'Twitter',
    href: 'https://twitter.com/kou_pg_0131',
    imgSrc: '/images/socials/twitter.svg',
  },
  zenn: {
    name: 'Zenn',
    href: 'https://zenn.dev/kou_pg_0131',
    imgSrc: '/images/socials/zenn.svg',
  },
  gmail: {
    name: 'Gmail',
    href: 'mailto:kou.pg.0131@gmail.com',
    imgSrc: '/images/socials/gmail.svg',
  },
} as const;

export type Social = typeof Social[keyof typeof Social];
