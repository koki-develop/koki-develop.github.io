module.exports = {
  root: true,
  rules: {
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
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: '@/app/components/Layout/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/app/components/pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/app/components/model/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/app/components/utils/**',
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
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
};
