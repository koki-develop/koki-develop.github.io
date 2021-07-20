export const Skill = {
  go: {
    name: 'Go',
    imgSrc: '/images/skills/go.svg',
    href: 'https://golang.org/',
  },
  python: {
    name: 'Python',
    imgSrc: '/images/skills/python.svg',
    href: 'https://www.python.org/',
  },
  ruby: {
    name: 'Ruby',
    imgSrc: '/images/skills/ruby.svg',
    href: 'https://www.ruby-lang.org/ja/',
  },
  nodejs: {
    name: 'Node.js',
    imgSrc: '/images/skills/nodejs.svg',
    href: 'https://nodejs.org/en/',
  },
  typescript: {
    name: 'TypeScript',
    imgSrc: '/images/skills/typescript.svg',
    href: 'https://www.typescriptlang.org/',
  },
  javascript: {
    name: 'JavaScript',
    imgSrc: '/images/skills/javascript.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  // html: {
  //   name: 'HTML',
  //   imgSrc: '/images/skills/html.svg',
  //   href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  // },
  // css: {
  //   name: 'CSS',
  //   imgSrc: '/images/skills/css.svg',
  //   href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  // },
  // sass: {
  //   name: 'Sass',
  //   imgSrc: '/images/skills/sass.svg',
  //   href: 'https://sass-lang.com/',
  // },
  gin: {
    name: 'Gin',
    imgSrc: '/images/skills/gin.svg',
    href: 'https://gin-gonic.com/',
  },
  flask: {
    name: 'Flask',
    imgSrc: '/images/skills/flask.svg',
    href: 'https://flask.palletsprojects.com/',
  },
  django: {
    name: 'Django',
    imgSrc: '/images/skills/django.svg',
    href: 'https://www.djangoproject.com/',
  },
  rails: {
    name: 'Rails',
    imgSrc: '/images/skills/rails.svg',
    href: 'https://rubyonrails.org/',
  },
  react: {
    name: 'React',
    imgSrc: '/images/skills/react.svg',
    href: 'https://reactjs.org/',
  },
  nextjs: {
    name: 'Next.js',
    imgSrc: '/images/skills/nextjs.svg',
    href: 'https://nextjs.org/',
  },
  // jekyll: {
  //   name: 'Jekyll',
  //   imgSrc: '/images/skills/jekyll.svg',
  //   href: 'https://jekyllrb.com/',
  // },
  mysql: {
    name: 'MySQL',
    imgSrc: '/images/skills/mysql.svg',
    href: 'https://www.mysql.com/',
  },
  postgresql: {
    name: 'PostgreSQL',
    imgSrc: '/images/skills/postgresql.svg',
    href: 'https://www.postgresql.org/',
  },
  sqlite: {
    name: 'SQLite',
    imgSrc: '/images/skills/sqlite.svg',
    href: 'http://www.sqlite.org/',
  },
  redis: {
    name: 'Redis',
    imgSrc: '/images/skills/redis.svg',
    href: 'https://redis.io/',
  },
  aws: {
    name: 'AWS',
    imgSrc: '/images/skills/aws.svg',
    href: 'https://aws.amazon.com',
  },
  gcp: {
    name: 'GCP',
    imgSrc: '/images/skills/gcp.svg',
    href: 'https://console.cloud.google.com',
  },
  vercel: {
    name: 'Vercel',
    imgSrc: '/images/skills/vercel.svg',
    href: 'https://vercel.com',
  },
  heroku: {
    name: 'Heroku',
    imgSrc: '/images/skills/heroku.svg',
    href: 'https://www.heroku.com/',
  },
  circleci: {
    name: 'CircleCI',
    imgSrc: '/images/skills/circleci.svg',
    href: 'https://circleci.com/',
  },
  travisci: {
    name: 'Travis CI',
    imgSrc: '/images/skills/travis-ci.svg',
    href: 'https://www.travis-ci.com/',
  },
  // githubactions: {
  //   name: 'GitHub Actions',
  //   imgSrc: '/images/skills/githubactions.png',
  //   href: 'https://github.com/features/actions',
  // },
  // jenkins: {
  //   name: 'Jenkins',
  //   imgSrc: '/images/skills/jenkins.svg',
  //   href: 'https://www.jenkins.io/',
  // },
  docker: {
    name: 'Docker',
    imgSrc: '/images/skills/docker.svg',
    href: 'https://www.docker.com/',
  },
  serverless: {
    name: 'Serverless',
    imgSrc: '/images/skills/serverless.svg',
    href: 'https://www.serverless.com/',
  },
  // ansible: {
  //   name: 'Ansible',
  //   imgSrc: '/images/skills/ansible.svg',
  //   href: 'https://www.ansible.com/',
  // },
  terraform: {
    name: 'Terraform',
    imgSrc: '/images/skills/terraform.svg',
    href: 'https://www.terraform.io/',
  },
  webpack: {
    name: 'Webpack',
    imgSrc: '/images/skills/webpack.svg',
    href: 'https://webpack.js.org/',
  },
  gulp: {
    name: 'Gulp',
    imgSrc: '/images/skills/gulp.svg',
    href: 'https://gulpjs.com/',
  },
  swagger: {
    name: 'Swagger',
    imgSrc: '/images/skills/swagger.svg',
    href: 'https://swagger.io/',
  },
  // packer: {
  //   name: 'Packer',
  //   imgSrc: '/images/skills/packer.svg',
  //   href: 'https://www.packer.io/',
  // },
  materialui: {
    name: 'Material-UI',
    imgSrc: '/images/skills/material-ui.svg',
    href: 'https://material-ui.com/',
  },
  bootstrap: {
    name: 'Bootstrap',
    imgSrc: '/images/skills/bootstrap.svg',
    href: 'https://getbootstrap.com/',
  },
  // jquery: {
  //   name: 'jQuery',
  //   imgSrc: '/images/skills/jquery.svg',
  //   href: 'https://jquery.com/',
  // },
  semanticui: {
    name: 'Semantic UI',
    imgSrc: '/images/skills/semantic-ui.svg',
    href: 'https://semantic-ui.com/',
  },
} as const;

export type Skill = typeof Skill[keyof typeof Skill];

export const SkillGroup = {
  language: {
    name: 'Language',
    skills: [
      Skill.go,
      Skill.python,
      Skill.ruby,
      Skill.nodejs,
      Skill.typescript,
      Skill.javascript,
      // Skill.html,
      // Skill.css,
      // Skill.sass,
    ],
  },
  frameworkOrLibary: {
    name: 'Framework/Library',
    skills: [
      Skill.gin,
      Skill.rails,
      Skill.flask,
      Skill.django,
      Skill.react,
      Skill.nextjs,
      // Skill.jekyll,
      // Skill.jquery,
    ],
  },
  rdbOrNoSql: {
    name: 'RDB/NoSQL',
    skills: [
      Skill.mysql,
      Skill.postgresql,
      Skill.sqlite,
      Skill.redis,
    ],
  },
  cloud: {
    name: 'Cloud',
    skills: [
      Skill.aws,
      Skill.gcp,
      Skill.vercel,
      Skill.heroku,
    ],
  },
  cicd: {
    name: 'CI/CD',
    skills: [
      Skill.circleci,
      Skill.travisci,
      // Skill.githubactions,
      // Skill.jenkins,
    ],
  },
  other: {
    name: 'Other',
    skills: [
      Skill.docker,
      Skill.serverless,
      // Skill.ansible,
      Skill.terraform,
      Skill.webpack,
      Skill.gulp,
      Skill.swagger,
      // Skill.packer,
      Skill.materialui,
      Skill.bootstrap,
      Skill.semanticui,
    ],
  },
} as const;

export type SkillGroup = typeof SkillGroup[keyof typeof SkillGroup]
