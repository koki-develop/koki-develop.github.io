import {
  aws,
  bubbletea,
  cdktf,
  cobra,
  cypress,
  dagger,
  docker,
  gin,
  githubActions,
  go,
  googleCloud,
  javascript,
  mantine,
  materialui,
  nextjs,
  react,
  ruby,
  serverless,
  tailwindcss,
  terraform,
  typescript,
  vecty,
  vercel,
} from "@/model/skill";
import { WorkGroup } from "@/model/work";

export const workGroups: WorkGroup[] = [
  {
    name: "Web Application",
    works: [
      {
        name: "Koki Sato",
        description: "個人用のポートフォリオサイト。",
        url: "https://koki.me",
        repository: "koki-develop.github.io",
        skills: [
          // language
          typescript,
          // framework/library
          nextjs,
          react,
          mantine,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "LGTM Generator",
        description: "LGTM 画像生成サービス。",
        url: "https://lgtmgen.org",
        repository: "lgtm-generator",
        skills: [
          // language
          go,
          typescript,
          // framework/library
          gin,
          react,
          nextjs,
          materialui,
          // cloud
          aws,
          vercel,
          // ci/cd
          githubActions,
          // other
          docker,
          terraform,
          serverless,
          cypress,
        ],
      },
      {
        name: "Badge Generator",
        description: "バッジ生成サービス。",
        url: "https://badgen.org",
        repository: "badge-generator",
        skills: [
          // language
          typescript,
          // framework/library
          nextjs,
          tailwindcss,
          // cloud
          googleCloud,
          // ci/cd
          githubActions,
          // other
          terraform,
        ],
      },
      {
        name: "GoGoGo",
        description:
          "バックエンド・フロントエンド・インフラ・ CI/CD を Go で書いた Web アプリケーション。",
        url: "https://go55.dev",
        repository: "gogogo",
        skills: [
          // language
          go,
          // framework/library
          gin,
          vecty,
          // cloud
          aws,
          // ci/cd
          githubActions,
          dagger,
          // other
          cdktf,
        ],
      },
    ],
  },
  {
    name: "CLI / Tool",
    works: [
      {
        name: "cLive",
        description: "ターミナル操作を自動化するコマンドラインツール。",
        imageSrc: "/images/work/clive.svg",
        repository: "clive",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "gat",
        description: "cat コマンド代替の Go 製コマンドラインツール。",
        imageSrc: "/images/work/gat.svg",
        repository: "gat",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "go-fzf",
        description: "Fuzzy Finder CLI & ライブラリ。",
        repository: "go-fzf",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "gh-grass",
        description: "GitHub の草を出力する GitHub CLI 拡張機能。",
        repository: "gh-grass",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "sheep",
        description: "羊を眠らせる sleep コマンド。",
        repository: "sheep",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "slp",
        description: "リッチなプログレスバーつきの sleep コマンド。",
        repository: "slp",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "gotrash",
        description: "rm コマンド代替の Go 製コマンドラインツール。",
        repository: "gotrash",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "ego",
        description: "echo コマンド代替の Go 製コマンドラインツール。",
        repository: "ego",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "Xvert",
        description:
          "様々なフォーマットを相互変換する Ruby 製コマンドラインツール。",
        url: "https://rubygems.org/gems/xvert",
        repository: "xvert",
        skills: [
          // language
          ruby,
          // framework/library
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "Typingo",
        description: "Go 製のタイピングゲーム。",
        repository: "typingo",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "docker-tags",
        description:
          "Docker イメージのタグ一覧を取得するコマンドラインツール。",
        repository: "docker-tags",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "Qiita Ranking",
        description: "Qiita のランキング記事を自動更新するシステム。",
        url: "https://qiita.com/items/b6cfc81906990b3a3e72",
        repository: "qiita-ranking",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "Hub Purge Action",
        description: "GitHub の画像キャッシュをクリアする GitHub Action 。",
        url: "https://github.com/marketplace/actions/hub-purge",
        repository: "hub-purge-action",
        skills: [
          // language
          javascript,
          // framework/library
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "CheckIP",
        description: "クライアントの IP アドレスを返す API 。",
        repository: "checkip",
        url: "https://checkip.dev",
        skills: [
          // language
          // framework/library
          // cloud
          aws,
          // ci/cd
          githubActions,
          // other
          terraform,
        ],
      },
    ],
  },
];
