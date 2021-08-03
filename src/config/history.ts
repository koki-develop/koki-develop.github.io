export const History = {
  second: {
    period: '2019-07 - now',
    title: 'デジタルマーケティング企業に入社',
    description: 'ジオターゲティング広告配信システムや MEO 対策支援ツール等の新規機能開発・保守を担当。',
  },
  first: {
    period: '2018-06 - 2019-05',
    title: '未経験で SES 企業に入社',
    description: '自社にて 3 ヶ月の研修を受けたのち、都内の某信託銀行にて常駐勤務。従業員向け顧客管理システムの新規開発を担当。',
  },
} as const;

export type History = typeof History[keyof typeof History];
