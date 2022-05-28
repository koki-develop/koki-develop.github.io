module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import', 'unused-imports'],
  rules: {
    'react/prop-types': 'off',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-tag-spacing': ['error'],
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '@/src/components/Layout/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/src/components/pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/src/components/model/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/src/components/utils/**',
            group: 'internal',
            position: 'before',
          },
          { pattern: '@/types/**', group: 'internal', position: 'before' },
          { pattern: '@/routes', group: 'internal', position: 'before' },
          { pattern: '@/config', group: 'internal', position: 'before' },
          { pattern: '@/styles/**', group: 'internal', position: 'before' },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './',
          },
        },
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
      },
    },
  ],
};
