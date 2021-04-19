module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  ignorePatterns: ['*.config.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './apps/**/tsconfig.json'
  },
  plugins: ['import', 'prettier', '@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    curly: ['error', 'all'],
    quotes: ['error', 'single'],
    'no-alert': 'error',
    'no-console': 'error',
    'no-redeclare': 'error',
    'no-var': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'import/default': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'no-template-curly-in-string': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/camelcase': 'off',
    'prefer-destructuring': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/display-name': 'off',
    'react/prefer-stateless-function': 'error',
    'no-irregular-whitespace': 'off',
    semi: 'error'
  },
  
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      "typescript": {
        "project": "tsconfig.json"
      },
    }
  }
};
