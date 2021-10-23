module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-tag-spacing': 'error',
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'extends': [
        'plugin:@typescript-eslint/recommended',
      ],
      'plugins': [
        '@typescript-eslint',
      ],
      'parser': '@typescript-eslint/parser',
      'rules': {
      },
    },
  ],
};
